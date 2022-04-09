// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { DEFAULT_GIT_COMMAND } from "../../constants/runtime";
import { CommandExitStatus } from "../../fi/hg/core/cmd/types/CommandExitStatus";
import { doExec } from "../doExec";
import { trim } from "../../fi/hg/core/modules/lodash";
import { LogService } from "../../fi/hg/core/LogService";

const LOG = LogService.createLogger('git-pull');

export async function gitPullWithRecurseSubmodules (
    dir: string
): Promise<CommandExitStatus> {

    LOG.debug(`gitPullWithRecurseSubmodules`, dir);
    const {stdout, stderr} = await doExec(
        [ DEFAULT_GIT_COMMAND, 'pull', '--recurse-submodules' ],
        {
            cwd: dir,
            stdio: "pipe"
        }
    );

    if ( stderr ) {
        LOG.error(`${dir}: 'git pull --recurse-submodules' with errors (inside "${dir}"): ${trim(stderr)}`);
    }

    if ( !stdout.includes("Already up to date.") ) {
        LOG.debug(`${dir}: 'git pull --recurse-submodules' with output (inside "${dir}"): ${trim(stdout)}`);
    }

    return CommandExitStatus.OK;
}

export async function gitPull (
    dir: string
): Promise<CommandExitStatus> {

    LOG.debug(`gitPull`, dir);
    const {stdout, stderr} = await doExec(
        [ DEFAULT_GIT_COMMAND, 'pull' ],
        {
            cwd: dir,
            stdio: "pipe"
        }
    );

    if ( stderr ) {
        LOG.error(`${dir}: 'git pull' with errors (inside "${dir}"): ${trim(stderr)}`);
    }

    if ( !stdout.includes("Already up to date.") ) {
        LOG.debug(`${dir}: 'git pull' with output (inside "${dir}"): ${trim(stdout)}`);
    }

    return CommandExitStatus.OK;
}
