// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { DEFAULT_GIT_COMMAND, DEFAULT_GIT_MODULES_FILE_NAME } from "../../constants/runtime";
import { CommandExitStatus } from "../../fi/hg/core/cmd/types/CommandExitStatus";
import { doExec } from "../doExec";
import { LogService } from "../../fi/hg/core/LogService";

const LOG = LogService.createLogger('git-config');

export async function setGitSubModuleConfig (
    targetPath: string,
    key: string,
    value: string
): Promise<CommandExitStatus> {
    LOG.debug(`setGitSubModuleConfig: `, targetPath, key, value);
    const fullKey = `submodule.${targetPath}.${key}`;
    await doExec([ DEFAULT_GIT_COMMAND, 'config', '-f', DEFAULT_GIT_MODULES_FILE_NAME, fullKey, value ]);
    return CommandExitStatus.OK;
}

export async function setGitSubModuleBranch (
    targetPath: string,
    branch: string
): Promise<CommandExitStatus> {
    LOG.debug(`setGitSubModuleBranch: `, targetPath, branch);
    return await setGitSubModuleConfig(targetPath, 'branch', branch);
}

export async function setGitSubModulePath (
    targetPath: string,
    path: string
): Promise<CommandExitStatus> {
    LOG.debug(`setGitSubModuleUrl: `, targetPath, path);
    return await setGitSubModuleConfig(targetPath, 'path', path);
}

export async function setGitSubModuleUrl (
    targetPath: string,
    url: string
): Promise<CommandExitStatus> {
    LOG.debug(`setGitSubModuleUrl: `, targetPath, url);
    return await setGitSubModuleConfig(targetPath, 'url', url);
}
