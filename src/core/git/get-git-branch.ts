// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { DEFAULT_GIT_COMMAND } from "../../constants/runtime";
import { doExec } from "../doExec";
import { LogService } from "../../fi/hg/core/LogService";

const LOG = LogService.createLogger('get-git-branch');

export async function getGitBranch (
    targetPath: string
): Promise<string> {
    LOG.debug(`getGitBranch: `, targetPath);
    try {
        const {stderr, stdout, exitCode} = await doExec(
            [ DEFAULT_GIT_COMMAND, 'rev-parse', '--abbrev-ref', 'HEAD' ],
            {
                cwd: targetPath,
                stdio: 'pipe'
            }
        );
        if (exitCode !== 0) {
            throw new Error(`Exit status was ${exitCode}: ${stderr}`);
        }
        LOG.debug(`stdout: `, stdout);
        return stdout;
    } catch (err) {
        LOG.error(`Exception: `, err);
        throw new Error(`Command to get git branch for "${targetPath}" failed: ${err}`);
    }
}
