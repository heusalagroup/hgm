// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { promises as fs, Stats } from "fs";
import { LogService } from "../../fi/hg/core/LogService";

const LOG = LogService.createLogger('file-exists');

export async function fileExists (file: string): Promise<boolean> {
    let stats: Stats | undefined;
    try {
        stats = await fs.stat(file);
        LOG.debug(`fileExists: stats: `, stats);
        return stats?.isFile() ?? false;
    } catch (err) {
        if ( (err as any)?.code === 'ENOENT' ) {
            return false;
        } else {
            throw new TypeError(`File stat error: "${file}": ${err}`);
        }
    }
}
