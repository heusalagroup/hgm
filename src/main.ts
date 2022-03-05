// Copyright (c) 2022. Heusala Group <info@heusalagroup.fi>. All rights reserved.

import { promises as fs, Stats } from "fs";
import path from "path";
import { ProcessUtils } from "./fi/hg/core/ProcessUtils";
import {
    COMMAND_NAME,
    DEFAULT_GIT_MODULES_FILE_NAME,
    DEFAULT_GIT_URL_BASE, DEFAULT_SOURCE_DIRECTORY,
    LOG_LEVEL
} from "./constants/runtime";

import { LogLevel, LogService } from "./fi/hg/core/LogService";
import { CommandExitStatus } from "./fi/hg/core/cmd/types/CommandExitStatus";
import { RequestClient } from "./fi/hg/core/RequestClient";
import { CommandArgumentUtils } from "./fi/hg/core/cmd/utils/CommandArgumentUtils";
import { ParsedCommandArgumentStatus } from "./fi/hg/core/cmd/types/ParsedCommandArgumentStatus";
import { Headers } from "./fi/hg/core/request/Headers";
import { BUILD_USAGE_URL, BUILD_WITH_FULL_USAGE } from "./constants/build";
import { doExec } from "./doExec";

// Must be first import to define environment variables before anything else
ProcessUtils.initEnvFromDefaultFiles();

LogService.setLogLevel(LOG_LEVEL);

const LOG = LogService.createLogger('main');

export async function main (
    args: string[] = []
) : Promise<CommandExitStatus> {

    try {

        Headers.setLogLevel(LogLevel.INFO);
        RequestClient.setLogLevel(LogLevel.INFO);

        LOG.debug(`Loglevel as ${LogService.getLogLevelString()}`);

        const {scriptName, parseStatus, exitStatus, errorString, freeArgs} = CommandArgumentUtils.parseArguments(COMMAND_NAME, args);

        if ( parseStatus === ParsedCommandArgumentStatus.HELP || parseStatus === ParsedCommandArgumentStatus.VERSION ) {
            console.log(getMainUsage(scriptName));
            return exitStatus;
        }

        if (errorString) {
            console.error(`ERROR: ${errorString}`);
            return exitStatus;
        }

        ProcessUtils.setupDestroyHandler( () => {

            LOG.debug('Stopping command from process utils event');

        }, (err : any) => {
            LOG.error('Error while shutting down the service: ', err);
        });

        const action     : string | undefined = freeArgs.shift();

        switch (action.toLowerCase()) {

            case 'u':
            case 'i':
            case 'update':
            case 'install':
                return await doUpdate(freeArgs);

            case 'r':
            case 'remove':
                return await doRemove(freeArgs);

        }

        return CommandExitStatus.UNKNOWN_ARGUMENT;

    } catch (err) {
        LOG.error(`Fatal error: `, err);
        return CommandExitStatus.FATAL_ERROR;
    }

}

export async function doUpdate ( freeArgs : string[] ) : Promise<CommandExitStatus> {

    const sourceUrl  : string | undefined = freeArgs.shift();

    if (!sourceUrl) {
        return await doUpdateAll(freeArgs);
    }

    const targetPath : string | undefined = freeArgs.shift();
    const branch     : string | undefined = sourceUrl.substring(1).includes('@') ? sourceUrl.substring(1).split('@').pop() : undefined;

    if ( !sourceUrl ) {
        return CommandExitStatus.ARGUMENT_PARSE_ERROR;
    }

    return await updateSubModule(sourceUrl, targetPath, branch);

}

export async function doUpdateAll ( freeArgs : string[] ) : Promise<CommandExitStatus> {
    return await initAllSubmodules();
}

export async function doRemove ( freeArgs : string[] ) : Promise<CommandExitStatus> {
    return CommandExitStatus.UNIMPLEMENTED_FEATURE;
}

/**
 *
 * @param sourceUrl
 * @param targetPath
 * @param branch
 * @nosideeffects
 * @__PURE__
 */
export async function updateSubModule (
    sourceUrl  : string,
    targetPath : string | undefined,
    branch     : string | undefined
): Promise<CommandExitStatus> {

    LOG.debug(`updateSubModule: `, sourceUrl, targetPath, branch );

    // FIXME: process.cwd() should actually be same as the git base directory
    const projectDir = process.cwd();

    const {gitUrl, packageName} = await parseGitUrl(sourceUrl);
    if (!gitUrl) {
        throw new TypeError(`Could not detect git url for: "${gitUrl}"`);
    }
    LOG.debug(`updateSubModule: gitUrl = `, gitUrl);
    LOG.debug(`updateSubModule: packageName = `, packageName);

    if (!targetPath) {
        targetPath = path.resolve( path.resolve(projectDir, DEFAULT_SOURCE_DIRECTORY), packageName.split('.').join('/') );
    }

    const relativeTargetPath = path.relative(process.cwd(), targetPath);
    LOG.debug(`relativeTargetPath = `, relativeTargetPath);

    let stats : Stats | undefined;
    try {
        stats = await fs.stat(targetPath);
        LOG.debug(`stats: `, stats);
    } catch (err) {

        if ( (err as any)?.code === 'ENOENT' ) {
        } else {
            LOG.error(`File stat error: `, targetPath, err);
        }
        stats = undefined;

    }

    const isFile      : boolean = stats?.isFile() ?? false;
    LOG.debug(`isFile: `, isFile);
    const isDirectory : boolean = stats?.isDirectory() ?? false;
    LOG.debug(`isDirectory: `, isDirectory);

    if (isDirectory) {
        LOG.debug(`Target directory already exists: `, targetPath);
    } else if (stats === undefined || isFile === undefined) {
        await addGitSubModule(gitUrl, relativeTargetPath);
        LOG.debug(`Initialized: `, gitUrl, relativeTargetPath);
    } else {
        LOG.error(`Target file not a directory: `, targetPath);
        return CommandExitStatus.CONFLICT;
    }

    const nextBranch = branch ?? 'main';
    LOG.debug(`nextBranch: `, nextBranch);

    const currentBranch = await getGitBranch(relativeTargetPath);
    LOG.debug(`currentBranch: `, currentBranch);

    if (currentBranch !== nextBranch) {
        await setGitSubModuleBranch(relativeTargetPath, nextBranch);
    } else {
        LOG.debug(`Branch already identical: `, nextBranch);
    }

    console.info(`${packageName}@${nextBranch}:${relativeTargetPath}`);
    return CommandExitStatus.OK;

}

export async function getGitBranch (
    targetPath : string
) : Promise<string> {

    LOG.debug(`getGitBranch: `, targetPath );

    const {stdout} = await doExec(
        [ 'git', 'rev-parse', '--abbrev-ref', 'HEAD' ],
        {
            cwd: targetPath,
            stdio : 'pipe'
        }
    );

    LOG.debug(`stdout: `, stdout );

    return stdout;

}

export async function initAllSubmodules () : Promise<CommandExitStatus> {
    LOG.debug(`initAllSubmodules`);
    await gitPull();
    await gitSubmoduleUpdateWithInit();
    return CommandExitStatus.OK;
}

export async function gitPull () : Promise<CommandExitStatus> {
    LOG.debug(`gitPull`);
    await doExec([ 'git', 'pull' ]);
    return CommandExitStatus.OK;
}

export async function gitPush () : Promise<CommandExitStatus> {
    LOG.debug(`gitPush`);
    await doExec([ 'git', 'push' ]);
    return CommandExitStatus.OK;
}

export async function gitSubmoduleUpdateWithInit () : Promise<CommandExitStatus> {
    LOG.debug(`gitSubmoduleUpdate`);
    await doExec([ 'git', 'submodule', 'update', '--init' ]);
    return CommandExitStatus.OK;
}

export async function addGitSubModule (
    gitUrl     : string,
    targetPath : string
) : Promise<CommandExitStatus> {
    LOG.debug(`addGitSubModule: `, gitUrl, targetPath );
    await doExec([ 'git', 'submodule', 'add', gitUrl, targetPath ]);
    return CommandExitStatus.OK;
}

export async function setGitSubModuleBranch (
    targetPath : string,
    branch     : string
) : Promise<CommandExitStatus> {
    LOG.debug(`setGitSubModuleBranch: `, targetPath, branch );
    const key = `submodule.${targetPath}.branch`;
    await doExec([ 'git', 'config', '-f', DEFAULT_GIT_MODULES_FILE_NAME, key, branch ]);
    return CommandExitStatus.OK;
}

/**
 * Convert user argument value to the actual git url
 *
 * @param sourceUrl
 */
export async function parseGitUrl (
    sourceUrl: string
) : Promise< {readonly gitUrl: string, readonly packageName: string} > {

    LOG.debug(`getGitUrl: sourceUrl = `, sourceUrl);

    // Detect raw urls like "git@github.com:org/name.git"
    if ( sourceUrl.includes(':') ) {
        LOG.debug(`getGitUrl: direct url: `, sourceUrl);
        return {
            gitUrl: sourceUrl,
            packageName : sourceUrl.replace(/\.git$/, "").split(':').slice(1).join(':').split('/').slice(1).join('/')
        };
    }

    // Replace "@heusalagroup/foo" -> "heusalagroup/foo"
    if ( sourceUrl.startsWith('@') ) {
        sourceUrl = sourceUrl.substring(1);
    }

    // Detect names with git org like "heusalagroup/fi.hg.core"
    if ( sourceUrl.includes('/') ) {
        const gitUrl = `${DEFAULT_GIT_URL_BASE}:${sourceUrl}.git`;
        LOG.debug(`getGitUrl: github with org: `, gitUrl);
        return {
            gitUrl: gitUrl,
            packageName: sourceUrl.split('/').slice(1).join('/')
        };
    }

    // Handle names without the git org like "fi.hg.core"
    const gitOrg = await getGitOrganization(sourceUrl);
    const gitUrl = `${DEFAULT_GIT_URL_BASE}:${gitOrg}/${sourceUrl}`
    LOG.debug(`getGitUrl: github with org "${gitOrg}": `, gitUrl);
    return {
        gitUrl: gitUrl,
        packageName: sourceUrl
    };

}

/**
 * Get the git organization name from a package name.
 *
 * This is implemented as a async method for future use -- we'll use an online service for this
 * later.
 *
 * @param name
 */
export async function getGitOrganization (name : string) : Promise<string|undefined> {

    switch ( name.toLowerCase().split('.').slice(0, 2).join('.') ) {

        case 'fi.hg':
        case 'fi.heusalagroup':
            return 'heusalagroup';

        case 'fi.hangovergames':
        case 'fi.palvelinkauppa':
            return 'hangovergames';

        case 'fi.nor':
        case 'fi.sendanor':
            return 'sendanor';

        default:
            return undefined;

    }

}

/**
 *
 * @param scriptName
 * @nosideeffects
 * @__PURE__
 */
export function getMainUsage (
    scriptName: string
): string {

    /* @__PURE__ */if ( /* @__PURE__ */BUILD_WITH_FULL_USAGE ) {

        return `USAGE: ${/* @__PURE__ */scriptName} [OPT(s)] ACTION [ARG(s)]

Manage git submodule states.

  hgm update [NAME] [ TARGET-PATH ]
  hgm remove NAME [ TARGET-PATH ]
  
...where NAME is one of:

  git@github.com:ORG/NAME
  [@]ORG/NAME
  NAME
    
...where NAME may be:

   fi.hg.FOO which will default to Heusala Group's github org as "heusalagroup/fi.hg.FOO"
    
...where BRANCH defaults to "main"
  
...and OPT is one of:

    -h --help          Print help
    -v --version       Print version
    --                 Disables option parsing

  Environment variables:

    LOG_LEVEL as one of:
    
      ALL
      DEBUG
      INFO
      WARN
      ERROR
      NONE
`;
    } else {
        return `USAGE: ${/* @__PURE__ */scriptName} ARG(1) [...ARG(N)]
See ${/* @__PURE__ */BUILD_USAGE_URL}
`;
    }
}

