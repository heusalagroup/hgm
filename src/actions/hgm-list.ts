// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { CommandExitStatus } from "../fi/hg/core/cmd/types/CommandExitStatus";
import { getProjectDir } from "../utils/git-url";
import { getGitSubModuleList, SubModuleListItem } from "../core/git/git-config";
import { forEach } from "../fi/hg/core/modules/lodash";

export async function hgmList (freeArgs: string[]): Promise<CommandExitStatus> {
    const projectDir = getProjectDir();
    const list : SubModuleListItem[] = await getGitSubModuleList(projectDir);
    forEach(list, (item: SubModuleListItem) => {

        let pathInfo : string = '';
        if (item.path !== item?.configPath) {
            if (item?.configPath === undefined) {
                pathInfo = ` [path not configured]`;
            } else {
                pathInfo = ` [path configured as "${item.configPath}"]`;
            }
        }

        let branchInfo : string = '';
        if (item.branch !== item?.configBranch) {
            if (item?.configBranch === undefined) {
                branchInfo = ` [branch not configured]`;
            } else {
                branchInfo = ` [branch configured as @${item.configBranch}]`;
            }
        }

        let urlInfo : string = '';
        if (item.url !== item?.configUrl) {
            if (item?.configUrl === undefined) {
                urlInfo = ` [url not configured]`;
            } else {
                urlInfo = ` [url configured as "${item.configUrl}"]`;
            }
        }

        console.info(`${item.packageName}@${item.branch}${branchInfo}${urlInfo}${pathInfo}`);

    });
    return CommandExitStatus.OK;
}
