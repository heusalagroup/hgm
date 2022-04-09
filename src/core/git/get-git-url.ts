// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { DEFAULT_GIT_COMMAND } from "../../constants/runtime";
import { doExec } from "../doExec";
import { LogService } from "../../fi/hg/core/LogService";

const LOG = LogService.createLogger('get-git-url');

export async function getGitUrl (
    targetPath: string,
    remoteName : string
): Promise<string> {
    LOG.debug(`getGitUrl: `, targetPath);
    const {stderr, stdout, exitCode} = await doExec(
        [ DEFAULT_GIT_COMMAND, 'remote', 'get-url', remoteName ],
        {
            cwd: targetPath,
            stdio: 'pipe'
        }
    );
    if (exitCode !== 0) {
        throw new Error(`Command to get git origin url for "${targetPath}" failed with status ${exitCode}: ${stderr}`);
    }
    LOG.debug(`stdout: `, stdout);
    return stdout;
}
