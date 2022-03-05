// Copyright (c) 2022. Heusala Group <info@heusalagroup.fi>. All rights reserved.

import { promises as fs, Stats } from "fs";
import path from "path";
import { ProcessUtils } from "./fi/hg/core/ProcessUtils";
import {
    COMMAND_NAME, DEFAULT_GIT_COMMAND,
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
import JsonAny from "./fi/hg/core/Json";
import {
    HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME,
    WELL_KNOWN_HG_METADATA_SERVICE_END_POINT
} from "./fi/hg/core/constants/wellKnown";
import { has, isObject, isString } from "./fi/hg/core/modules/lodash";

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
                return await hgmUpdate(freeArgs);

            case 'r':
            case 'remove':
                return await hgmRemove(freeArgs);

        }

        return CommandExitStatus.UNKNOWN_ARGUMENT;

    } catch (err) {
        LOG.error(`Fatal error: `, err);
        return CommandExitStatus.FATAL_ERROR;
    }

}

export async function hgmUpdate (freeArgs : string[] ) : Promise<CommandExitStatus> {

    const sourceUrl  : string | undefined = freeArgs.shift();

    if (!sourceUrl) {
        return await hgmUpdateAll(process.cwd(), freeArgs);
    }

    const targetPath : string | undefined = freeArgs.shift();
    const branch     : string | undefined = sourceUrl.substring(1).includes('@') ? sourceUrl.substring(1).split('@').pop() : undefined;

    return await updateSubModule(sourceUrl, targetPath, branch);

}

export async function hgmUpdateAll (dir: string, freeArgs : string[] ) : Promise<CommandExitStatus> {
    // FIXME: Handle update for rest of freeArgs
    return await initAllSubmodules( dir );
}

export async function hgmRemove (freeArgs : string[] ) : Promise<CommandExitStatus> {
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

    // We'll update or initialize the submodule now
    if (isDirectory) {
        LOG.debug(`Target directory already exists, we'll only update: `, targetPath);
        await gitPullWithRecurseSubmodules(relativeTargetPath);
    } else if (stats === undefined || isFile === undefined) {
        await addGitSubModule(gitUrl, relativeTargetPath);
        LOG.debug(`Initialized: `, gitUrl, relativeTargetPath);
    } else {
        LOG.error(`Target file not a directory: `, targetPath);
        return CommandExitStatus.CONFLICT;
    }

    // Next we'll check that the branch is correct
    const nextBranch = branch ?? 'main';
    LOG.debug(`nextBranch: `, nextBranch);

    const currentBranch = await getGitBranch(relativeTargetPath);
    LOG.debug(`currentBranch: `, currentBranch);

    if (currentBranch !== nextBranch) {
        await setGitSubModuleBranch(relativeTargetPath, nextBranch);
    } else {
        LOG.debug(`Branch already identical: `, nextBranch);
    }

    await setGitSubModuleUrl(relativeTargetPath, gitUrl);

    // Now let's verify there isn't any submodules that we need to initialize
    await hgmUpdateAll(targetPath, []);

    // Everything ok!
    console.info(`${packageName}@${nextBranch}:${relativeTargetPath}`);
    return CommandExitStatus.OK;

}

export async function getGitBranch (
    targetPath : string
) : Promise<string> {

    LOG.debug(`getGitBranch: `, targetPath );

    const {stdout} = await doExec(
        [ DEFAULT_GIT_COMMAND, 'rev-parse', '--abbrev-ref', 'HEAD' ],
        {
            cwd: targetPath,
            stdio : 'pipe'
        }
    );

    LOG.debug(`stdout: `, stdout );

    return stdout;

}

export async function initAllSubmodules (dir : string) : Promise<CommandExitStatus> {
    LOG.debug(`initAllSubmodules`);
    await gitPullWithRecurseSubmodules(dir);
    await gitSubmoduleUpdateWithInit(dir);
    return CommandExitStatus.OK;
}

export async function gitPullWithRecurseSubmodules (
    dir : string
) : Promise<CommandExitStatus> {
    LOG.debug(`gitPullWithRecurseSubmodules`, dir);
    const {stdout, stderr} = await doExec([ DEFAULT_GIT_COMMAND, 'pull', '--recurse-submodules' ], {
        cwd: dir,
        stdio: "pipe"
    });

    if (stderr) {
        LOG.error(`${dir}: 'git pull --recurse-submodules' with errors: ${stderr}`);
    } else if (stdout !== "Already up to date.") {
        LOG.debug(`${dir}: 'git pull --recurse-submodules' with output: ${stdout}`)
    }

    return CommandExitStatus.OK;
}

export async function gitPush () : Promise<CommandExitStatus> {
    LOG.debug(`gitPush`);
    await doExec([ DEFAULT_GIT_COMMAND, 'push' ]);
    return CommandExitStatus.OK;
}

export async function gitSubmoduleUpdateWithInit (dir: string) : Promise<CommandExitStatus> {
    LOG.debug(`gitSubmoduleUpdate`);
    await doExec([ DEFAULT_GIT_COMMAND, 'submodule', 'update', '--init', '--recursive' ], {cwd: dir});
    return CommandExitStatus.OK;
}

export async function addGitSubModule (
    gitUrl     : string,
    targetPath : string
) : Promise<CommandExitStatus> {
    LOG.debug(`addGitSubModule: `, gitUrl, targetPath );
    await doExec([ DEFAULT_GIT_COMMAND, 'submodule', 'add', gitUrl, targetPath ]);
    return CommandExitStatus.OK;
}

export async function setGitSubModuleUrl (
    targetPath : string,
    url        : string
) : Promise<CommandExitStatus> {
    LOG.debug(`setGitSubModuleUrl: `, targetPath, url );
    return await setGitSubModuleConfig(targetPath, 'url', url);
}

export async function setGitSubModuleBranch (
    targetPath : string,
    branch     : string
) : Promise<CommandExitStatus> {
    LOG.debug(`setGitSubModuleBranch: `, targetPath, branch );
    return await setGitSubModuleConfig(targetPath, 'branch', branch);
}

export async function setGitSubModuleConfig (
    targetPath : string,
    key   : string,
    value : string
) : Promise<CommandExitStatus> {
    LOG.debug(`setGitSubModuleConfig: `, targetPath, key, value );
    const fullKey = `submodule.${targetPath}.${key}`;
    await doExec([ DEFAULT_GIT_COMMAND, 'config', '-f', DEFAULT_GIT_MODULES_FILE_NAME, fullKey, value ]);
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
    if (!gitOrg) {
        throw new TypeError(`No Github organization configured for: ${sourceUrl}`);
    }

    const gitUrl = `${DEFAULT_GIT_URL_BASE}:${gitOrg}/${sourceUrl}`
    LOG.debug(`getGitUrl: github with org "${gitOrg}": `, gitUrl);
    return {
        gitUrl: gitUrl,
        packageName: sourceUrl
    };

}

export function getScopePrefix (name : string) : string {
    return name.toLowerCase().split('.').slice(0, 2).join('.');
}

export function getDomainNameFromScope (name : string) : string {
    const [tld, domain] = name.toLowerCase().split('.').slice(0, 2);
    return domain && tld ? [domain, tld].join('.') : tld;
}

/**
 * Get the git organization name from a package name.
 *
 * This is implemented as a async method for future use -- we'll use an online service for this
 * later.
 *
 * @param packageName
 */
export async function getGitOrganization (packageName : string) : Promise<string|undefined> {

    const wellKnownUrl : string = getWellKnownHgMetaUrlFromScope(packageName);
    LOG.debug(`getGitOrganization: wellKnownUrl = `, wellKnownUrl);
    const data : any = await RequestClient.getJson(wellKnownUrl);
    LOG.debug(`getGitOrganization: data = `, data);

    if ( !data || !isObject(data) ) {
        return undefined;
    }

    // Search package based option
    let packageMetadata : any = data && has(data, packageName) ? data[packageName] : undefined;
    LOG.debug(`getGitOrganization: packageMetadata = `, packageMetadata);
    if (packageMetadata && isObject(packageMetadata) && has(packageMetadata, HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME)) {
        const githubOrgName : string | undefined = packageMetadata[HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME];
        LOG.debug(`getGitOrganization: package: githubOrgName = `, githubOrgName);
        if (isString(githubOrgName)) return githubOrgName;
    }

    // Search root scope based option
    const scopeName = getScopePrefix(packageName);
    packageMetadata = data && has(data, scopeName) ? data[scopeName] : undefined;
    LOG.debug(`getGitOrganization: packageMetadata = `, packageMetadata);
    if (packageMetadata && isObject(packageMetadata) && has(packageMetadata, HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME)) {
        const githubOrgName : string | undefined = packageMetadata[HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME];
        LOG.debug(`getGitOrganization: scope: githubOrgName = `, githubOrgName);
        if (isString(githubOrgName)) return githubOrgName;
    }

    // Search root option
    if (has(data, HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME)) {
        const githubOrgName : string | undefined = data[HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME];
        LOG.debug(`getGitOrganization: root: githubOrgName = `, githubOrgName);
        if (isString(githubOrgName)) return githubOrgName;
    }

    return undefined;

}

export function getWellKnownHgMetaUrlFromScope (name : string) {
    const domain = getDomainNameFromScope(name);
    return `https://${domain}${WELL_KNOWN_HG_METADATA_SERVICE_END_POINT}`;
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

  hgm update [ --path=TARGET-PATH ] [NAME]
  hgm remove [ --path=TARGET-PATH ] NAME
  
...where NAME is one of:

  git@github.com:ORG/NAME[@BRANCH]
  [@]ORG/NAME[@BRANCH]
  NAME[@BRANCH]
    
...where NAME may be:

   fi.hg.FOO which will default to Heusala Group's github org as "heusalagroup/fi.hg.FOO"
    
   Note! Currently these organization mappings are hard coded, but we'll implement a way to
   register your own. Owning a prefix is possible by owning a domain like our "hg.fi".
    
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

