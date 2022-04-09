// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { execa, Options } from "execa";
import { LogService } from "../fi/hg/core/LogService";

const LOG = LogService.createLogger('doExec');

export interface ExecResult {
    readonly stdout: string;
    readonly stderr: string;
}

export async function doExec (
    args  : string[],
    opts ?: Partial<Options<string>>
): Promise< ExecResult > {

    const command = args.shift();

    const commandOptions : Options = {
        stdio: "inherit",
        ...(opts ?? {}),
    };

    LOG.debug(`Executing: `, command, args);
    const {stdout, stderr} = await execa(command, args, commandOptions);
    return {stdout, stderr};

}
