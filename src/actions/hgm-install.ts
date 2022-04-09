// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { DEFAULT_SOURCE_DIRECTORY } from "../constants/runtime";
import { relative as pathRelative, resolve as pathResolve } from "path";
import { promises as fs, Stats } from "fs";
import { CommandExitStatus } from "../fi/hg/core/cmd/types/CommandExitStatus";
import { LogService } from "../fi/hg/core/LogService";
import { addGitSubModule } from "../core/git/git-submodule-add";
import { getGitBranch } from "../core/git/get-git-branch";
import { getGitSubModuleList, setGitSubModuleBranch, setGitSubModulePath, setGitSubModuleUrl, SubModuleListItem } from "../core/git/git-config";
import { getPathFromPackageName, getProjectDir, parseGitUrl } from "../utils/git-url";
import { reduce } from "../fi/hg/core/modules/lodash";
import { gitPullWithRecurseSubmodules } from "../core/git/git-pull";
import { gitSubmoduleUpdateWithInit } from "../core/git/git-submodule-update";

const LOG = LogService.createLogger('hgm-install');

export async function hgmInstall (freeArgs: string[]): Promise<CommandExitStatus> {

    const sourceUrl: string | undefined = freeArgs.shift();
    if ( !sourceUrl ) {
        return await hgmInstallAll(getProjectDir(), freeArgs);
    }

    const targetPath: string | undefined = freeArgs.shift();
    const branch: string | undefined = sourceUrl.substring(1).includes('@') ? sourceUrl.substring(1).split('@').pop() : undefined;

    return await installSubModule(sourceUrl, targetPath, branch);

}

export async function hgmInstallAll (dir: string, freeArgs: string[]): Promise<CommandExitStatus> {

    await initAllSubmodules(dir);

    let changes : boolean = false;

    const list: SubModuleListItem[] = await getGitSubModuleList(dir);
    await reduce(
        list,
        async (prev: Promise<void>, item: SubModuleListItem): Promise<void> => {

            await prev;

            if ( item.path !== item?.configPath ) {
                changes = true;
                await setGitSubModulePath(dir, item.path);
                if (item?.configPath === undefined) {
                    console.info(`${item.packageName}: Configured path to "${item.path}"`);
                } else {
                    console.info(`${item.packageName}: Configured path from "${item?.configPath}" to "${item.path}"`);
                }
            }

            if ( item.branch !== item?.configBranch ) {
                changes = true;
                await setGitSubModuleBranch(dir, item.branch);
                if (item?.configBranch === undefined) {
                    console.info(`${item.packageName}: Configured branch to "${item.branch}"`);
                } else {
                    console.info(`${item.packageName}: Configured branch from "${item?.configBranch}" to "${item.branch}"`);
                }
            }

            if ( item.url !== item?.configUrl ) {
                changes = true;
                await setGitSubModuleUrl(dir, item.url);
                if (item?.configUrl === undefined) {
                    console.info(`${item.packageName}: Configured url to "${item.url}"`);
                } else {
                    console.info(`${item.packageName}: Configured url from "${item?.configUrl}" to "${item.url}"`);
                }
            }

        },
        Promise.resolve()
    );

    if (changes) {
        await initAllSubmodules(dir);
    }

    return CommandExitStatus.OK;

}

/**
 *
 * @param sourceUrl
 * @param targetPath
 * @param branch
 * @nosideeffects
 * @__PURE__
 */
export async function installSubModule (
    sourceUrl: string,
    targetPath: string | undefined,
    branch: string | undefined
): Promise<CommandExitStatus> {

    LOG.debug(`installSubModule: `, sourceUrl, targetPath, branch);

    const projectDir = getProjectDir();

    const {gitUrl, packageName} = await parseGitUrl(sourceUrl);
    if ( !gitUrl ) {
        throw new TypeError(`Could not detect git url for: "${gitUrl}"`);
    }
    LOG.debug(`installSubModule: gitUrl = `, gitUrl);
    LOG.debug(`installSubModule: packageName = `, packageName);

    if ( !targetPath ) {
        targetPath = pathResolve(pathResolve(projectDir, DEFAULT_SOURCE_DIRECTORY), getPathFromPackageName(packageName));
    }

    const relativeTargetPath = pathRelative(getProjectDir(), targetPath);
    LOG.debug(`relativeTargetPath = `, relativeTargetPath);

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

    // We'll install or initialize the submodule now
    if ( isDirectory ) {
        LOG.debug(`Target directory already exists, we'll only install: `, targetPath);
        await gitPullWithRecurseSubmodules(relativeTargetPath);
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
    await hgmInstallAll(targetPath, []);

    // Everything ok!
    console.info(`${packageName}@${nextBranch}:${relativeTargetPath}`);
    return CommandExitStatus.OK;

}

export async function initAllSubmodules (dir: string): Promise<CommandExitStatus> {
    LOG.debug(`initAllSubmodules`);
    await gitPullWithRecurseSubmodules(dir);
    await gitSubmoduleUpdateWithInit(dir);
    return CommandExitStatus.OK;
}
