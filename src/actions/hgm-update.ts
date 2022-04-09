// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { DEFAULT_SOURCE_DIRECTORY } from "../constants/runtime";
import { relative as pathRelative, resolve as pathResolve } from "path";
import { promises as fs, Stats } from "fs";
import { CommandExitStatus } from "../fi/hg/core/cmd/types/CommandExitStatus";
import { LogService } from "../fi/hg/core/LogService";
import { gitPullWithRecurseSubmodules } from "../core/git/git-pull";
import { gitSubmoduleUpdateWithInit } from "../core/git/git-submodule-update";
import { addGitSubModule } from "../core/git/git-submodule-add";
import { getGitBranch } from "../core/git/get-branch";
import { setGitSubModuleBranch, setGitSubModulePath, setGitSubModuleUrl } from "../core/git/git-config";

import { getPathFromPackageName, getProjectDir, parseGitUrl } from "../utils/git-url";

const LOG = LogService.createLogger('update');

export async function hgmUpdate (freeArgs: string[]): Promise<CommandExitStatus> {

    const sourceUrl: string | undefined = freeArgs.shift();

    if ( !sourceUrl ) {
        return await hgmUpdateAll(process.cwd(), freeArgs);
    }

    const targetPath: string | undefined = freeArgs.shift();
    const branch: string | undefined = sourceUrl.substring(1).includes('@') ? sourceUrl.substring(1).split('@').pop() : undefined;

    return await updateSubModule(sourceUrl, targetPath, branch);

}

export async function hgmUpdateAll (dir: string, freeArgs: string[]): Promise<CommandExitStatus> {
    // FIXME: Handle update for rest of freeArgs
    return await initAllSubmodules(dir);
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

    const {gitUrl, packageName} = await parseGitUrl(sourceUrl);
    if ( !gitUrl ) {
        throw new TypeError(`Could not detect git url for: "${gitUrl}"`);
    }
    LOG.debug(`updateSubModule: gitUrl = `, gitUrl);
    LOG.debug(`updateSubModule: packageName = `, packageName);

    if ( !targetPath ) {
        targetPath = pathResolve(pathResolve(projectDir, DEFAULT_SOURCE_DIRECTORY), getPathFromPackageName(packageName) );
    }

    const relativeTargetPath = pathRelative(process.cwd(), targetPath);
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

    // We'll update or initialize the submodule now
    if ( isDirectory ) {
        LOG.debug(`Target directory already exists, we'll only update: `, targetPath);
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
    await hgmUpdateAll(targetPath, []);

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
