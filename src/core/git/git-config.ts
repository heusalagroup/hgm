// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { DEFAULT_GIT_COMMAND, DEFAULT_GIT_MODULES_FILE_NAME, DEFAULT_SOURCE_DIRECTORY } from "../../constants/runtime";
import { CommandExitStatus } from "../../fi/hg/core/cmd/types/CommandExitStatus";
import { doExec } from "../doExec";
import { LogService } from "../../fi/hg/core/LogService";
import { isString, reduce, startsWith, trim } from "../../fi/hg/core/modules/lodash";
import { resolve as pathResolve } from "path";
import { getPackageNameFromPath } from "../../utils/git-url";

const LOG = LogService.createLogger('git-config');

export async function getGitSubModuleConfigByRegExpKey (
    targetPath: string,
    key: string
): Promise<string> {
    LOG.debug(`getGitSubModuleConfigByKey: `, targetPath, key);
    const commandArgs : readonly string[] = [ DEFAULT_GIT_COMMAND, 'config', '-f', DEFAULT_GIT_MODULES_FILE_NAME, '--get-regexp', key ];
    const {stdout, stderr, exitCode} = await doExec(
        commandArgs,
        {
            cwd: targetPath,
            stdio: 'pipe'
        }
    );
    LOG.debug(`getGitSubModuleConfigByKey: stdout: `, stdout);
    if (exitCode !== 0) {
        throw new Error(`Internal command ('${commandArgs.join(' ')}' with exit status ${exitCode}) had errors: ${stderr}`);
    }
    if (!isString(stdout)) {
        throw new TypeError(`Internal command ('${commandArgs.join(' ')}' with exit status ${exitCode}) output was not a string: ${stdout}`);
    }
    return stdout;
}


export async function setGitSubModuleConfigByKey (
    targetPath: string,
    key: string,
    value: string
): Promise<CommandExitStatus> {
    LOG.debug(`setGitSubModuleConfigByKey: `, targetPath, key, value);
    await doExec([ DEFAULT_GIT_COMMAND, 'config', '-f', DEFAULT_GIT_MODULES_FILE_NAME, key, value ]);
    return CommandExitStatus.OK;
}

export async function getGitSubModuleConfigByKey (
    targetPath: string,
    key: string
): Promise<string> {
    LOG.debug(`getGitSubModuleConfigByKey: `, targetPath, key);
    const {stdout} = await doExec([ DEFAULT_GIT_COMMAND, 'config', '-f', DEFAULT_GIT_MODULES_FILE_NAME, key ]);
    LOG.debug(`getGitSubModuleConfigByKey: stdout: `, stdout);
    return stdout;
}

export async function setGitSubModuleConfigBySubKey (
    targetPath: string,
    key: string,
    value: string
): Promise<CommandExitStatus> {
    LOG.debug(`setGitSubModuleConfigBySubKey: `, targetPath, key, value);
    const fullKey = `submodule.${targetPath}.${key}`;
    return await setGitSubModuleConfigByKey(targetPath, fullKey, value);
}

export async function getGitSubModuleConfigBySubKey (
    targetPath: string,
    key: string
): Promise<string> {
    LOG.debug(`getGitSubModuleConfigBySubKey: `, targetPath, key);
    const fullKey = `submodule.${targetPath}.${key}`;
    return await getGitSubModuleConfigByKey(targetPath, fullKey);
}

export async function setGitSubModuleBranch (
    targetPath: string,
    branch: string
): Promise<CommandExitStatus> {
    LOG.debug(`setGitSubModuleBranch: `, targetPath, branch);
    return await setGitSubModuleConfigBySubKey(targetPath, 'branch', branch);
}

export async function setGitSubModulePath (
    targetPath: string,
    path: string
): Promise<CommandExitStatus> {
    LOG.debug(`setGitSubModuleUrl: `, targetPath, path);
    return await setGitSubModuleConfigBySubKey(targetPath, 'path', path);
}

export async function setGitSubModuleUrl (
    targetPath: string,
    url: string
): Promise<CommandExitStatus> {
    LOG.debug(`setGitSubModuleUrl: `, targetPath, url);
    return await setGitSubModuleConfigBySubKey(targetPath, 'url', url);
}

export interface SubModuleListItem {
    readonly key  : string;
    readonly path : string;
    readonly name : string;
}

export async function getGitSubModuleList (
    targetPath: string
): Promise<SubModuleListItem[]> {
    LOG.debug(`getGitSubModuleList: `, targetPath);
    const output = await getGitSubModuleConfigByRegExpKey(targetPath, 'path');
    const srcDir : string = pathResolve(targetPath, DEFAULT_SOURCE_DIRECTORY);
    return reduce(
        output.split('\n'),
        (ret: SubModuleListItem[], item: string) : SubModuleListItem[] => {
            const [itemKey, itemPath] = item.split(' ');
            const fullItemPath : string = pathResolve(targetPath, itemPath);
            const itemName = startsWith(fullItemPath, srcDir + '/') ? getPackageNameFromPath(fullItemPath.substring(srcDir.length + 1)) : '';
            ret.push(
                {
                    key  : itemKey,
                    path : itemPath,
                    name : itemName
                }
            );
            return ret;
        },
        [] as SubModuleListItem[]
    );
}
