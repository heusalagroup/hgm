// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { CommandExitStatus } from "../fi/hg/core/cmd/types/CommandExitStatus";
import { getProjectDir } from "../utils/git-url";
import { getGitSubModuleList, SubModuleListItem } from "../core/git/git-config";
import { forEach } from "../fi/hg/core/modules/lodash";

export async function hgmList (freeArgs: string[]): Promise<CommandExitStatus> {
    const projectDir = getProjectDir();
    const list : SubModuleListItem[] = await getGitSubModuleList(projectDir);
    forEach(list, (item: SubModuleListItem) => {
        console.info(`${item.name}\t${item.path}`);
    });
    return CommandExitStatus.OK;
}
