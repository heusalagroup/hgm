// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { DEFAULT_GIT_COMMAND, DEFAULT_GIT_MODULES_FILE_NAME, DEFAULT_SOURCE_DIRECTORY } from "../../constants/runtime";
import { CommandExitStatus } from "../../fi/hg/core/cmd/types/CommandExitStatus";
import { doExec } from "../doExec";
import { LogService } from "../../fi/hg/core/LogService";
import { endsWith, filter, find, isString, map, reduce, startsWith, uniq, values } from "../../fi/hg/core/modules/lodash";
import { resolve as pathResolve } from "path";
import { getPackageNameFromPath } from "../../utils/git-url";
import { getGitBranch } from "./get-git-branch";
import { getGitUrl } from "./get-git-url";

const LOG = LogService.createLogger('git-config');

export async function getGitSubModuleConfigByRegExp (
    targetPath: string,
    key: string
): Promise<string> {
    LOG.debug(`getGitSubModuleConfigByRegExp: `, targetPath, key);
    const commandArgs: readonly string[] = [ DEFAULT_GIT_COMMAND, 'config', '-f', DEFAULT_GIT_MODULES_FILE_NAME, '--get-regexp', key ];
    const {stdout, stderr, exitCode} = await doExec(
        commandArgs,
        {
            cwd: targetPath,
            stdio: 'pipe'
        }
    );
    LOG.debug(`getGitSubModuleConfigByRegExp: stdout: `, stdout);
    if ( exitCode !== 0 ) {
        throw new Error(`Internal command ('${commandArgs.join(' ')}' with exit status ${exitCode}) had errors: ${stderr}`);
    }
    if ( !isString(stdout) ) {
        throw new TypeError(`Internal command ('${commandArgs.join(' ')}' with exit status ${exitCode}) output was not a string: ${stdout}`);
    }
    return stdout;
}

export async function getGitSubModuleConfigList (
    targetPath: string,
    key: string
): Promise<string> {
    LOG.debug(`getGitSubModuleConfigList: `, targetPath, key);
    const commandArgs: readonly string[] = [ DEFAULT_GIT_COMMAND, 'config', '-f', DEFAULT_GIT_MODULES_FILE_NAME, '--list' ];
    const {stdout, stderr, exitCode} = await doExec(
        commandArgs,
        {
            cwd: targetPath,
            stdio: 'pipe'
        }
    );
    LOG.debug(`getGitSubModuleConfigList: stdout: `, stdout);
    if ( exitCode !== 0 ) {
        throw new Error(`Internal command ('${commandArgs.join(' ')}' with exit status ${exitCode}) had errors: ${stderr}`);
    }
    if ( !isString(stdout) ) {
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

    /**
     * The submodule keyword, eg. usually same as path.
     *
     * Will be part of the git configuration keys. For example, `submodule.KEY.path` is the path keyword in the git config.
     */
    readonly key: string;

    /**
     * The relative path to the working copy (e.g. `src/fi/hg/core`)
     */
    readonly path: string;

    /**
     * The package name (e.g. `fi.hg.core`)
     */
    readonly packageName: string;

    /**
     * This is the active git branch on the local working copy (e.g. `main`)
     */
    readonly branch: string;

    /**
     * This is the active git branch on the local working copy (e.g. `main`)
     */
    readonly url: string;

    /**
     * This is the path on the git module configuration (e.g. `src/fi/hg/core`)
     */
    readonly configPath?: string;

    /**
     * This is the git branch on the .gitmodule configuration (e.g. `main`)
     */
    readonly configBranch?: string;

    /**
     * This is the git url on the .gitmodule configuration (e.g. `git@github.com:heusalagroup/fi.hg.core.git`)
     */
    readonly configUrl?: string;

}

export interface SubModuleConfigItem {

    /**
     * E.g. `KEY` part from `submodule.KEY.SUB_KEY=VALUE` line
     *
     * Usually the relative path to the module.
     */
    readonly key: string;

    /**
     * E.g. `SUB_KEY` part from `submodule.KEY.SUB_KEY=VALUE` line.
     *
     * Can be `branch`, `url` or `path`.
     */
    readonly subKey: string;

    /**
     * E.g. `VALUE` part from the `submodule.KEY.SUB_KEY=VALUE` line
     */
    readonly value: string;

}

export function createSubModuleConfigItem (
    key: string,
    subKey: string,
    value : string
) : SubModuleConfigItem {
    return {
        key,
        subKey,
        value
    };
}

function splitInTwo (value: string, separator: string) : [string, string] {
    if (value.indexOf(separator) >= 0) {
        const items = value.split(separator);
        return [
            items.shift(),
            items.join(separator)
        ];
    } else {
        return [value, ''];
    }
}

export function parseSubModuleConfigItemList (input : string) :  SubModuleConfigItem[] {
    return reduce(
        input.split('\n'),
        (ret: SubModuleConfigItem[], item: string): SubModuleConfigItem[] => {
            let [ lineKey, lineValue ] = splitInTwo(item, '=');
            LOG.debug(`parseSubModuleConfigItemList: Parsed: "${lineKey}", "${lineValue}"`);
            if (startsWith(lineKey, 'submodule.')) {
                lineKey = lineKey.substring('submodule.'.length);
                LOG.debug(`parseSubModuleConfigItemList: Trimmed lineKey: "${lineKey}"`);
                if (endsWith(lineKey, '.branch')) {
                    lineKey = lineKey.substring(0, lineKey.length - '.branch'.length);
                    ret.push(createSubModuleConfigItem(lineKey, 'branch', lineValue));
                } else if (endsWith(lineKey, '.path')) {
                    lineKey = lineKey.substring(0, lineKey.length - '.path'.length);
                    ret.push(createSubModuleConfigItem(lineKey, 'path', lineValue));
                } else if (endsWith(lineKey, '.url')) {
                    lineKey = lineKey.substring(0, lineKey.length - '.url'.length);
                    ret.push(createSubModuleConfigItem(lineKey, 'url', lineValue));
                } else {
                    LOG.debug(`parseSubModuleConfigItemList: Unknown config line: "${lineKey}"`);
                }
            } else {
                LOG.debug(`parseSubModuleConfigItemList: Not submodule line: "${lineKey}"`);
            }
            return ret;
        },
        [] as SubModuleConfigItem[]
    );
}

export async function getGitSubModuleList (
    targetPath: string
): Promise<SubModuleListItem[]> {

    LOG.debug(`getGitSubModuleList: `, targetPath);

    const output = await getGitSubModuleConfigList(targetPath, '^submodule\\.');

    const rows: SubModuleConfigItem[] = parseSubModuleConfigItemList(output);

    const rowKeys: string[] = uniq(map(rows, (row: SubModuleConfigItem) => row.key));

    const srcDir: string = pathResolve(targetPath, DEFAULT_SOURCE_DIRECTORY);

    return await reduce(
        rowKeys,
        async (p: Promise<SubModuleListItem[]>, configKey: string) : Promise<SubModuleListItem[]> => {

            const prevList : SubModuleListItem[] = await p;

            const itemRows: SubModuleConfigItem[] = filter(rows, (row: SubModuleConfigItem) => row.key === configKey);
            const branchRow: SubModuleConfigItem | undefined = find(itemRows, (row: SubModuleConfigItem) => row.subKey === 'branch');
            const configBranch: string | undefined = branchRow?.value;
            const pathRow: SubModuleConfigItem | undefined = find(itemRows, (row: SubModuleConfigItem) => row.subKey === 'path');
            const configPath: string | undefined = pathRow?.value;
            const urlRow: SubModuleConfigItem | undefined = find(itemRows, (row: SubModuleConfigItem) => row.subKey === 'url');
            const configUrl: string | undefined = urlRow?.value;

            const itemPath : string = configKey;

            const fullItemPath: string = pathResolve(targetPath, itemPath);

            const packageName = startsWith(fullItemPath, srcDir + '/') ? getPackageNameFromPath(fullItemPath.substring(srcDir.length + 1)) : '';

            const branch = await getGitBranch(fullItemPath);
            const url = await getGitUrl(fullItemPath, 'origin');

            prevList.push({
                key: configKey,
                path: itemPath,
                packageName,
                branch,
                url,
                configPath,
                configBranch,
                configUrl
            });

            return prevList;

        },
        Promise.resolve([])
    );

}
