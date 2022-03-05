// Copyright (c) 2022. Heusala Group <info@heusalagroup.fi>. All rights reserved.

import { parseNonEmptyString } from "../fi/hg/core/modules/lodash";
import { LogLevel, parseLogLevel } from "../fi/hg/core/types/LogLevel";
import {
    BUILD_COMMAND_NAME,
    BUILD_LOG_LEVEL
} from "./build";

export const LOG_LEVEL       : LogLevel = parseLogLevel(parseNonEmptyString(process?.env?.LOG_LEVEL) ?? parseNonEmptyString(BUILD_LOG_LEVEL)) ?? LogLevel.INFO ;
export const COMMAND_NAME    : string   = parseNonEmptyString(process?.env?.COMMAND_NAME)            ?? BUILD_COMMAND_NAME;
export const DEFAULT_GIT_URL_BASE : string = 'git@github.com';
export const DEFAULT_GIT_MODULES_FILE_NAME : string = '.gitmodules';
export const DEFAULT_SOURCE_DIRECTORY : string = 'src';
export const DEFAULT_GIT_COMMAND : string = 'git';
