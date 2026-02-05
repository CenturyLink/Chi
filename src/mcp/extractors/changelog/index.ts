/**
 * Changelog Extractor
 *
 * Parses the Chi CHANGELOG.md file to extract version history
 * and recent changes for the MCP metadata.
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { ChangelogInfo, ChangelogEntry, ChangeCategory } from '../../types/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CHANGELOG_PATH = join(__dirname, '../../../../node_modules/@centurylink/chi-documentation/CHANGELOG.md');
const VERSION_REGEX = /^## (\d+\.\d+\.\d+)\s*\(([^)]+)\)/;
const CATEGORY_REGEX = /^### (.+)$/;
const TYPE_REGEX = /^#### (Added|Changed|Fixed|Removed|Deprecated)$/;
const ITEM_REGEX = /^- (.+)$/;

interface ParserState {
  entries: ChangelogEntry[];
  currentEntry: ChangelogEntry | null;
  currentCategory: string;
  currentType: ChangeCategory['type'] | null;
}

function createNewEntry(version: string, date: string): ChangelogEntry {
  return { version, date, changes: [] };
}

function handleVersionLine(state: ParserState, match: RegExpMatchArray, maxVersions: number): boolean {
  const version = match[1];
  const date = match[2];

  if (!version || !date) return false;

  if (state.currentEntry) {
    state.entries.push(state.currentEntry);
    if (state.entries.length >= maxVersions) return true;
  }

  state.currentEntry = createNewEntry(version, date);
  state.currentCategory = '';
  state.currentType = null;

  return false;
}

function handleCategoryLine(state: ParserState, match: RegExpMatchArray): void {
  const category = match[1];

  if (category) {
    state.currentCategory = category;
    state.currentType = null;
  }
}

function handleTypeLine(state: ParserState, match: RegExpMatchArray): void {
  const type = match[1];

  if (type) {
    state.currentType = type as ChangeCategory['type'];
  }
}

function handleItemLine(state: ParserState, match: RegExpMatchArray): void {
  if (!state.currentEntry || !state.currentType) return;

  const rawItem = match[1];

  if (!rawItem) return;

  const item = rawItem.replace(/^(Added|Changed|Fixed|Removed|Deprecated):\s*/i, '');
  const existingCategory = state.currentEntry.changes.find(
    (c) => c.category === state.currentCategory && c.type === state.currentType
  );

  if (existingCategory) {
    existingCategory.items.push(item);
  } else {
    state.currentEntry.changes.push({
      category: state.currentCategory,
      type: state.currentType,
      items: [item],
    });
  }
}

function processLine(state: ParserState, line: string, maxVersions: number): boolean {
  const versionMatch = line.match(VERSION_REGEX);

  if (versionMatch) return handleVersionLine(state, versionMatch, maxVersions);

  if (!state.currentEntry) return false;

  const categoryMatch = line.match(CATEGORY_REGEX);

  if (categoryMatch) {
    handleCategoryLine(state, categoryMatch);

    return false;
  }

  const typeMatch = line.match(TYPE_REGEX);
  if (typeMatch) {
    handleTypeLine(state, typeMatch);

    return false;
  }

  const itemMatch = line.match(ITEM_REGEX);

  if (itemMatch) handleItemLine(state, itemMatch);

  return false;
}

function parseChangelogContent(content: string, maxVersions: number): ChangelogEntry[] {
  const state: ParserState = {
    entries: [],
    currentEntry: null,
    currentCategory: '',
    currentType: null,
  };

  for (const line of content.split('\n')) {
    if (processLine(state, line, maxVersions)) break;
  }

  if (state.currentEntry && state.entries.length < maxVersions) {
    state.entries.push(state.currentEntry);
  }

  return state.entries;
}

/**
 * Extracts changelog information from the Chi documentation package.
 */
export function extractChangelog(maxVersions = 10): ChangelogInfo | null {
  if (!existsSync(CHANGELOG_PATH)) {
    console.warn(`  ⚠ Changelog not found at: ${CHANGELOG_PATH}`);

    return null;
  }

  const content = readFileSync(CHANGELOG_PATH, 'utf-8');
  const entries = parseChangelogContent(content, maxVersions);
  const latest = entries[0];

  if (!latest) {
    return null;
  }

  const allVersionsMatch = content.match(/^## \d+\.\d+\.\d+/gm);

  return {
    currentVersion: latest.version,
    releaseDate: latest.date,
    recentVersions: entries,
    totalVersions: allVersionsMatch?.length ?? 0,
  };
}

/**
 * Gets a summary of changes for a specific version.
 */
export function getVersionSummary(version: string): ChangelogEntry | null {
  if (!existsSync(CHANGELOG_PATH)) return null;

  const content = readFileSync(CHANGELOG_PATH, 'utf-8');
  const entries = parseChangelogContent(content, 500);

  return entries.find((e) => e.version === version) ?? null;
}

/**
 * Formats changelog entries for display.
 */
export function formatChangelog(entries: ChangelogEntry[]): string {
  return entries
    .map((entry) => {
      const changes = entry.changes
        .map((cat) => {
          const items = cat.items.map((item) => `  - ${item}`).join('\n');

          return `### ${cat.category} (${cat.type})\n${items}`;
        })
        .join('\n');
      return `## ${entry.version} (${entry.date})\n${changes}`;
    })
    .join('\n\n');
}
