// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { DEFAULT_GIT_COMMAND } from "../../constants/runtime";
import { CommandExitStatus } from "../../fi/hg/core/cmd/types/CommandExitStatus";
import { doExec } from "../doExec";
import { LogService } from "../../fi/hg/core/LogService";

const LOG = LogService.createLogger('git-push');

export async function gitPush (): Promise<CommandExitStatus> {
    LOG.debug(`gitPush`);
    await doExec([ DEFAULT_GIT_COMMAND, 'push' ]);
    return CommandExitStatus.OK;
}
