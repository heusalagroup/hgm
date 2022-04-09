// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { DEFAULT_GIT_COMMAND } from "../../constants/runtime";
import { CommandExitStatus } from "../../fi/hg/core/cmd/types/CommandExitStatus";
import { doExec } from "../doExec";
import { LogService } from "../../fi/hg/core/LogService";

const LOG = LogService.createLogger('git-submodule-add');

export async function addGitSubModule (
    gitUrl: string,
    targetPath: string
): Promise<CommandExitStatus> {
    LOG.debug(`addGitSubModule: `, gitUrl, targetPath);
    await doExec([ DEFAULT_GIT_COMMAND, 'submodule', 'add', gitUrl, targetPath ]);
    return CommandExitStatus.OK;
}
