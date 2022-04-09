// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME, WELL_KNOWN_HG_METADATA_SERVICE_END_POINT } from "../fi/hg/core/constants/wellKnown";
import { DEFAULT_GIT_URL_BASE } from "../constants/runtime";
import { RequestClient } from "../fi/hg/core/RequestClient";
import { has, isObject, isString } from "../fi/hg/core/modules/lodash";
import { LogService } from "../fi/hg/core/LogService";

const LOG = LogService.createLogger('git-url');

export function getScopePrefix (name: string): string {
    return name.toLowerCase().split('.').slice(0, 2).join('.');
}

export function getWellKnownHgMetaUrlFromScope (name: string) {
    const domain = getDomainNameFromScope(name);
    return `https://${domain}${WELL_KNOWN_HG_METADATA_SERVICE_END_POINT}`;
}

/**
 * Get the git organization name from a package name.
 *
 * This is implemented as a async method since we'll use an HTTP service.
 *
 * @param packageName
 */
export async function getGitOrganization (packageName: string): Promise<string | undefined> {

    const wellKnownUrl: string = getWellKnownHgMetaUrlFromScope(packageName);
    LOG.debug(`getGitOrganization: wellKnownUrl = `, wellKnownUrl);
    const data: any = await RequestClient.getJson(wellKnownUrl);
    LOG.debug(`getGitOrganization: data = `, data);

    if ( !data || !isObject(data) ) {
        return undefined;
    }

    // Search package based option
    let packageMetadata: any = data && has(data, packageName) ? data[packageName] : undefined;
    LOG.debug(`getGitOrganization: packageMetadata = `, packageMetadata);
    if ( packageMetadata && isObject(packageMetadata) && has(packageMetadata, HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME) ) {
        const githubOrgName: string | undefined = packageMetadata[HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME];
        LOG.debug(`getGitOrganization: package: githubOrgName = `, githubOrgName);
        if ( isString(githubOrgName) ) return githubOrgName;
    }

    // Search root scope based option
    const scopeName = getScopePrefix(packageName);
    packageMetadata = data && has(data, scopeName) ? data[scopeName] : undefined;
    LOG.debug(`getGitOrganization: packageMetadata = `, packageMetadata);
    if ( packageMetadata && isObject(packageMetadata) && has(packageMetadata, HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME) ) {
        const githubOrgName: string | undefined = packageMetadata[HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME];
        LOG.debug(`getGitOrganization: scope: githubOrgName = `, githubOrgName);
        if ( isString(githubOrgName) ) return githubOrgName;
    }

    // Search root option
    if ( has(data, HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME) ) {
        const githubOrgName: string | undefined = data[HG_METADATA_SERVICE_GITHUB_ORGANIZATION_NAME];
        LOG.debug(`getGitOrganization: root: githubOrgName = `, githubOrgName);
        if ( isString(githubOrgName) ) return githubOrgName;
    }

    return undefined;

}

export function getDomainNameFromScope (name: string): string {
    const [ tld, domain ] = name.toLowerCase().split('.').slice(0, 2);
    return domain && tld ? [ domain, tld ].join('.') : tld;
}

/**
 * Convert user argument value to the actual git url
 *
 * @param sourceUrl
 */
export async function parseGitUrl (
    sourceUrl: string
): Promise<{readonly gitUrl: string, readonly packageName: string}> {

    LOG.debug(`getGitUrl: sourceUrl = `, sourceUrl);

    // Detect raw urls like "git@github.com:org/name.git"
    if ( sourceUrl.includes(':') ) {
        LOG.debug(`getGitUrl: direct url: `, sourceUrl);
        return {
            gitUrl: sourceUrl,
            packageName: sourceUrl.replace(/\.git$/, "").split(':').slice(1).join(':').split('/').slice(1).join('/')
        };
    }

    // Replace "@heusalagroup/foo" -> "heusalagroup/foo"
    if ( sourceUrl.startsWith('@') ) {
        sourceUrl = sourceUrl.substring(1);
    }

    // Detect names with git org like "heusalagroup/fi.hg.core"
    if ( sourceUrl.includes('/') ) {
        const gitUrl = `${DEFAULT_GIT_URL_BASE}:${sourceUrl}.git`;
        LOG.debug(`getGitUrl: github with org: `, gitUrl);
        return {
            gitUrl: gitUrl,
            packageName: sourceUrl.split('/').slice(1).join('/')
        };
    }

    // Handle names without the git org like "fi.hg.core"
    const gitOrg = await getGitOrganization(sourceUrl);
    if ( !gitOrg ) {
        throw new TypeError(`No Github organization configured for: ${sourceUrl}`);
    }

    const gitUrl = `${DEFAULT_GIT_URL_BASE}:${gitOrg}/${sourceUrl}.git`;
    LOG.debug(`getGitUrl: github with org "${gitOrg}": `, gitUrl);
    return {
        gitUrl: gitUrl,
        packageName: sourceUrl
    };

}
