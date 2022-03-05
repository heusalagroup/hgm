// Copyright (c) 2022. Heusala Group <info@heusalagroup.fi>. All rights reserved.

import { promises as fs, Stats } from "fs";
import path from "path";
import { ProcessUtils } from "./fi/hg/core/ProcessUtils";

// Must be first import to define environment variables before anything else
ProcessUtils.initEnvFromDefaultFiles();

import {
    COMMAND_NAME,
    LOG_LEVEL
} from "./constants/runtime";

import { LogService, LogLevel } from "./fi/hg/core/LogService";

LogService.setLogLevel(LOG_LEVEL);

import { CommandExitStatus } from "./fi/hg/core/cmd/types/CommandExitStatus";
import { RequestClient } from "./fi/hg/core/RequestClient";
import { CommandArgumentUtils } from "./fi/hg/core/cmd/utils/CommandArgumentUtils";
import { ParsedCommandArgumentStatus } from "./fi/hg/core/cmd/types/ParsedCommandArgumentStatus";
import { Headers } from "./fi/hg/core/request/Headers";
import { BUILD_USAGE_URL, BUILD_WITH_FULL_USAGE } from "./constants/build";
import { execa } from "execa";

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

        const targetPath : string | undefined = freeArgs.shift();
        const sourceUrl  : string | undefined = freeArgs.shift();
        const branch     : string | undefined = freeArgs.shift();

        if (!sourceUrl || !targetPath) {
            console.log(getMainUsage(scriptName));
            return CommandExitStatus.ARGUMENT_PARSE_ERROR;
        }

        return await updateSubModule(sourceUrl, targetPath, branch);

    } catch (err) {
        LOG.error(`Fatal error: `, err);
        return CommandExitStatus.FATAL_ERROR;
    }

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
    targetPath : string,
    branch     : string | undefined
): Promise<CommandExitStatus> {

    LOG.debug(`updateSubModule: `, sourceUrl, targetPath, branch );

    const gitUrl = sourceUrl.includes(':') ? sourceUrl : `git@github.com:${sourceUrl}.git`;
    LOG.debug(`gitUrl = `, gitUrl);

    // FIXME: process.cwd() should actually be same as the git base directory

    const relativeTargetPath = path.relative(process.cwd(), targetPath);
    LOG.debug(`relativeTargetPath = `, relativeTargetPath);

    let stats : Stats | undefined;
    try {
        stats = await fs.stat(targetPath);
        LOG.debug(`stats: `, stats);
    } catch (err) {
        LOG.error(`File stat error: `, targetPath, err);
        stats = undefined;
    }

    const isFile      : boolean = stats?.isFile() ?? false;
    LOG.debug(`isFile: `, isFile);
    const isDirectory : boolean = stats?.isDirectory() ?? false;
    LOG.debug(`isDirectory: `, isDirectory);

    if (isDirectory) {
        LOG.debug(`Target directory already exists: `, targetPath);
    } else if (isFile === undefined) {
        await addGitSubModule(gitUrl, relativeTargetPath);
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

    return CommandExitStatus.OK;

}

export async function getGitBranch (
    targetPath : string
) : Promise<string> {

    LOG.debug(`getGitBranch: `, targetPath );

    const args = [
        'rev-parse',
        '--abbrev-ref',
        'HEAD'
    ];

    LOG.debug(`Executing git `, args);

    const {stdout} = await execa(
        'git',
        args,
        {
            cwd: targetPath,
            stdio: "inherit"
        }
    );

    LOG.debug(`stdout: `, stdout );

    return stdout;


}

// TODO: updateAllSubmodules
// git pull
// git submodule update --init

export async function addGitSubModule (
    gitUrl     : string,
    targetPath : string
) : Promise<CommandExitStatus> {

    LOG.debug(`addGitSubModule: `, gitUrl, targetPath );

    const args = [
        'submodule',
        'add',
        gitUrl,
        targetPath
    ];

    LOG.debug(`Executing git `, args);

    await execa(
        'git',
        args,
        {
            stdio: "inherit"
        }
    );

    return CommandExitStatus.OK;

}

export async function setGitSubModuleBranch (
    targetPath : string,
    branch     : string
) : Promise<CommandExitStatus> {

    LOG.debug(`setGitSubModuleBranch: `, targetPath, branch );

    const key = `submodule.${targetPath}.branch`;

    const args = [
        'config',
        '-f',
        '.gitmodules',
        key,
        branch
    ];

    LOG.debug(`Executing git `, args);

    await execa(
        'git',
        args,
        {
            stdio: "inherit"
        }
    );

    return CommandExitStatus.OK;

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

        return `USAGE: ${/* @__PURE__ */scriptName} [OPT(s)] TARGET-PATH [ SOURCE-URL [ BRANCH ] ]

Manage git submodule state.
  
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
