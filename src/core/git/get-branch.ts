// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { DEFAULT_GIT_COMMAND } from "../../constants/runtime";
import { doExec } from "../doExec";
import { LogService } from "../../fi/hg/core/LogService";

const LOG = LogService.createLogger('get-branch');

export async function getGitBranch (
    targetPath: string
): Promise<string> {

    LOG.debug(`getGitBranch: `, targetPath);

    const {stdout} = await doExec(
        [ DEFAULT_GIT_COMMAND, 'rev-parse', '--abbrev-ref', 'HEAD' ],
        {
            cwd: targetPath,
            stdio: 'pipe'
        }
    );

    LOG.debug(`stdout: `, stdout);

    return stdout;

}
