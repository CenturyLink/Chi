/**
 * Utility Helpers
 *
 * Common helper functions for metadata generation.
 */

import { createHash } from 'crypto';
import { readFileSync } from 'fs';
import { join } from 'path';
import { MIN_KEYWORD_LENGTH } from '../config/constants.js';
import type { MetadataChecksums } from '../types/index.js';

export type { MetadataChecksums } from '../types/index.js';

interface PackageJson {
  version?: string;
  [key: string]: unknown;
}

/**
 * Retrieves the current version from package.json.
 * @param rootPath - Root path of the project
 * @returns Version string or '0.0.0' if not found
 */
export function getVersion(rootPath: string): string {
  try {
    const content = readFileSync(join(rootPath, 'package.json'), 'utf-8');
    const pkg = JSON.parse(content) as PackageJson;
    return pkg.version ?? '0.0.0';
  } catch {
    return '0.0.0';
  }
}

const HASH_LENGTH = 8;

/**
 * Creates a short MD5 hash of data (8 characters).
 * Used for cache invalidation checksums.
 * @param data - Data to hash (will be JSON stringified)
 * @returns Short hash string
 */
export function hashData(data: unknown): string {
  return createHash('md5').update(JSON.stringify(data)).digest('hex').substring(0, HASH_LENGTH);
}

interface ChecksumInput {
  designTokens: unknown;
  utilities: unknown;
  cssComponents: unknown;
  tools: unknown;
}

/**
 * Creates checksums for metadata sections.
 * @param metadata - Metadata sections to checksum
 * @returns Object with checksums for each section
 */
export function createChecksums(metadata: ChecksumInput): MetadataChecksums {
  return {
    tokens: hashData(metadata.designTokens),
    utilities: hashData(metadata.utilities),
    cssComponents: hashData(metadata.cssComponents),
    tools: hashData(metadata.tools),
  };
}

/**
 * Extracts searchable keywords from text.
 */
export function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[\s-]+/)
    .filter((w) => w.length >= MIN_KEYWORD_LENGTH && !/^\d+$/.test(w));
}

/**
 * Adds keywords to search index with deduplication.
 */
export function addToIndex(index: Record<string, string[]>, keywords: string[], itemName: string): void {
  for (const keyword of keywords) {
    const normalizedKeyword = keyword.toLowerCase();

    index[normalizedKeyword] ??= [];

    if (!index[normalizedKeyword].includes(itemName)) {
      index[normalizedKeyword].push(itemName);
    }
  }
}

/**
 * Converts a CSS class modifier to camelCase property name.
 */
export function modifierToPropName(modifier: string): string {
  return modifier
    .replace(/^-+/, '')
    .replace(/--/g, '-')
    .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Converts a camelCase property name to kebab-case CSS class.
 */
export function propNameToModifier(propName: string): string {
  return '-' + propName.replace(/([A-Z])/g, '-$1').toLowerCase();
}

type LogLevel = 'info' | 'success' | 'warn' | 'error';

const LOG_PREFIXES: Record<LogLevel, string> = {
  info: '📊',
  success: '✓',
  warn: '⚠',
  error: '✗',
};

/**
 * Simple logger with consistent formatting.
 */
export const logger = {
  info: (msg: string) => console.log(`${LOG_PREFIXES.info} ${msg}`),
  success: (msg: string, indent = false) => console.log(`${indent ? '  ' : ''}${LOG_PREFIXES.success} ${msg}`),
  warn: (msg: string) => console.warn(`${LOG_PREFIXES.warn} ${msg}`),
  error: (msg: string) => console.error(`${LOG_PREFIXES.error} ${msg}`),
  phase: (num: number, name: string) => console.log(`\n📊 Phase ${num}: ${name}...`),
  section: (emoji: string, name: string) => console.log(`\n${emoji} ${name}...`),
  summary: (label: string, value: string | number) => console.log(`   ${label}: ${value}`),
  blank: () => console.log(''),
};
