// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { execa, Options } from "execa";
import { LogService } from "../fi/hg/core/LogService";

const LOG = LogService.createLogger('doExec');

export interface ExecResult {
    readonly stdout: string;
    readonly stderr: string;
    readonly exitCode : number;
}

export async function doExec (
    args  : readonly string[],
    opts ?: Partial<Options<string>>
): Promise< ExecResult > {
    let a : string[] = [...args];
    const command = a.shift();
    const commandOptions : Options = {
        stdio: "inherit",
        ...(opts ?? {}),
    };
    LOG.debug(`Executing: `, command, a);
    const {stdout, stderr, exitCode} = await execa(command, a, commandOptions);
    return {stdout, stderr, exitCode};
}
