// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { DEFAULT_SOURCE_DIRECTORY } from "../constants/runtime";
import { relative as pathRelative, resolve as pathResolve } from "path";
import { promises as fs, Stats } from "fs";
import { CommandExitStatus } from "../fi/hg/core/cmd/types/CommandExitStatus";
import { LogService } from "../fi/hg/core/LogService";
import { gitPull } from "../core/git/git-pull";
import { gitSubmoduleUpdate } from "../core/git/git-submodule-update";
import { addGitSubModule } from "../core/git/git-submodule-add";
import { getGitBranch } from "../core/git/get-git-branch";
import { getGitSubModuleList, setGitSubModuleBranch, setGitSubModulePath, setGitSubModuleUrl, SubModuleListItem } from "../core/git/git-config";
import { getPathFromPackageName, getProjectDir, parseGitUrl } from "../utils/git-url";
import { find, reduce } from "../fi/hg/core/modules/lodash";

const LOG = LogService.createLogger('hgm-update');

export async function hgmUpdate (freeArgs: string[]): Promise<CommandExitStatus> {

    const sourceUrl: string | undefined = freeArgs.shift();
    if ( !sourceUrl ) {
        return await hgmUpdateAll(getProjectDir(), freeArgs);
    }

    const targetPath: string | undefined = freeArgs.shift();
    const branch: string | undefined = sourceUrl.substring(1).includes('@') ? sourceUrl.substring(1).split('@').pop() : undefined;

    return await updateSubModule(sourceUrl, targetPath, branch);

}

export async function hgmUpdateAll (dir: string, freeArgs: string[]): Promise<CommandExitStatus> {
    LOG.debug(`hgmUpdateAll: dir=`, dir);
    const list: SubModuleListItem[] = await getGitSubModuleList(dir);
    LOG.debug(`hgmUpdateAll: list=`, list);
    return await reduce(
        list,
        async (prev: Promise<CommandExitStatus>, item: SubModuleListItem): Promise<CommandExitStatus> => {
            const ret: CommandExitStatus = await prev;
            if ( ret !== CommandExitStatus.OK ) return ret;
            return await internalUpdateSubModule(dir, item);
        },
        Promise.resolve(CommandExitStatus.OK)
    );
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
    sourceUrl: string,
    targetPath: string | undefined,
    branch: string | undefined
): Promise<CommandExitStatus> {

    LOG.debug(`updateSubModule: `, sourceUrl, targetPath, branch);

    const projectDir = getProjectDir();
    LOG.debug(`updateSubModule: projectDir=`, projectDir);

    const list: SubModuleListItem[] = await getGitSubModuleList(projectDir);
    LOG.debug(`updateSubModule: list=`, list);

    const searchByUrl = (item: SubModuleListItem) : boolean => item.url === sourceUrl;

    let packageItem: SubModuleListItem | undefined;
    if (targetPath !== undefined) {
        const searchByPath = (item: SubModuleListItem) : boolean => item.path === targetPath;
        packageItem = find(list, searchByPath) ?? find(list, searchByUrl);
    } else {
        packageItem = find(list, searchByUrl);
    }

    if (!packageItem) {
        throw new TypeError(`Could not find package for ${sourceUrl}`);
    }

    return await internalUpdateSubModule(projectDir, packageItem);

}

/**
 *
 * @param projectDir
 * @param packageItem
 * @nosideeffects
 * @__PURE__
 */
export async function internalUpdateSubModule (
    projectDir: string,
    packageItem: SubModuleListItem
): Promise<CommandExitStatus> {

    LOG.debug(`internalUpdateSubModule: `, projectDir, packageItem);

    const {gitUrl, packageName} = await parseGitUrl(packageItem.url);
    if ( !gitUrl ) {
        throw new TypeError(`Could not detect git url for: "${gitUrl}"`);
    }
    LOG.debug(`updateSubModule: gitUrl = `, gitUrl);
    LOG.debug(`updateSubModule: packageName = `, packageName);

    const targetPath = pathResolve(pathResolve(projectDir, DEFAULT_SOURCE_DIRECTORY), getPathFromPackageName(packageName));

    const branch = packageItem.branch;

    const relativeTargetPath = pathRelative(projectDir, targetPath);
    LOG.debug(`relativeTargetPath = `, relativeTargetPath);

    if ( packageItem.path !== packageItem?.configPath ) {
        LOG.debug(`hgmUpdateAll: Configuring path as: `, relativeTargetPath, packageItem.path);
        await setGitSubModulePath(relativeTargetPath, packageItem.path);
        if ( packageItem?.configPath === undefined ) {
            LOG.debug(`${packageItem.packageName}: Configured path to "${packageItem.path}"`);
        } else {
            LOG.debug(`${packageItem.packageName}: Configured path from "${packageItem?.configPath}" to "${packageItem.path}"`);
        }
    }

    if ( packageItem.branch !== packageItem?.configBranch ) {
        LOG.debug(`hgmUpdateAll: Configuring branch as: `, relativeTargetPath, packageItem.branch);
        await setGitSubModuleBranch(relativeTargetPath, packageItem.branch);
        if ( packageItem?.configBranch === undefined ) {
            LOG.debug(`${packageItem.packageName}: Configured branch to "${packageItem.branch}"`);
        } else {
            LOG.debug(`${packageItem.packageName}: Configured branch from "${packageItem?.configBranch}" to "${packageItem.branch}"`);
        }
    }

    if ( packageItem.url !== packageItem?.configUrl ) {
        LOG.debug(`hgmUpdateAll: Configuring url as: `, relativeTargetPath, packageItem.url);
        await setGitSubModuleUrl(relativeTargetPath, packageItem.url);
        if ( packageItem?.configUrl === undefined ) {
            LOG.debug(`${packageItem.packageName}: Configured url to "${packageItem.url}"`);
        } else {
            LOG.debug(`${packageItem.packageName}: Configured url from "${packageItem?.configUrl}" to "${packageItem.url}"`);
        }
    }


    let stats: Stats | undefined;
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

    const isFile: boolean = stats?.isFile() ?? false;
    LOG.debug(`isFile: `, isFile);
    const isDirectory: boolean = stats?.isDirectory() ?? false;
    LOG.debug(`isDirectory: `, isDirectory);

    // We'll update or initialize the submodule now
    if ( isDirectory ) {
        LOG.debug(`Target directory already exists, we'll only update: `, targetPath);
        await gitPull(relativeTargetPath);
    } else if ( stats === undefined || isFile === undefined ) {
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

    if ( currentBranch !== nextBranch ) {
        await setGitSubModuleBranch(relativeTargetPath, nextBranch);
    } else {
        LOG.debug(`Branch already identical: `, nextBranch);
    }

    await setGitSubModuleUrl(relativeTargetPath, gitUrl);

    await setGitSubModulePath(relativeTargetPath, relativeTargetPath);

    // Now let's verify there isn't any submodules that we need to initialize
    await hgmUpdateAll(targetPath, []);

    // Everything ok!
    console.info(`${packageName}@${nextBranch}:${relativeTargetPath}`);
    return CommandExitStatus.OK;

}

export async function updateAllSubmodules (dir: string): Promise<CommandExitStatus> {
    LOG.debug(`updateAllSubmodules`);
    await gitSubmoduleUpdate(dir);
    return CommandExitStatus.OK;
}
