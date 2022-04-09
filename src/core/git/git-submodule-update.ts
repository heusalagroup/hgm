// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { DEFAULT_GIT_COMMAND } from "../../constants/runtime";
import { CommandExitStatus } from "../../fi/hg/core/cmd/types/CommandExitStatus";
import { doExec } from "../doExec";
import { LogService } from "../../fi/hg/core/LogService";

const LOG = LogService.createLogger('git-submodule-update');

export async function gitSubmoduleUpdateWithInit (dir: string): Promise<CommandExitStatus> {
    LOG.debug(`gitSubmoduleUpdate`);
    await doExec([ DEFAULT_GIT_COMMAND, 'submodule', 'update', '--init', '--recursive' ], {cwd: dir});
    return CommandExitStatus.OK;
}
