/**
 * Regenerates `src/chi/components/icons/_material-codepoints.scss` from the
 * deployed Material Symbols font.
 *
 * Why this exists: Chi renders icons by their Private Use Area (PUA) codepoint
 * rather than their ligature name, so the font can never flash a readable icon
 * name before it loads and an unknown name renders nothing. That requires a
 * name -> codepoint map that exactly matches the deployed font. This script is
 * the single, reproducible source of that map.
 *
 * How it works: it downloads the deployed woff2, then derives each icon name
 * from the font itself (no external name list, so there is zero version drift):
 *   1. Every PUA glyph (>= U+E000) is keyed by its post-table glyph name.
 *   2. The GSUB ligature table adds alias names (e.g. `10k`, `bookmark_border`)
 *      that resolve to the same glyphs — the exact path the browser uses.
 * Codepoints are chosen deterministically (the canonical/smallest value per
 * glyph) so regeneration is stable.
 *
 * Usage:
 *   npm run generate:icon-codepoints          # rewrite the SCSS map
 *   npm run generate:icon-codepoints -- --check   # fail if it is out of date
 */
import * as fontkit from 'fontkit';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const FONT_URL =
  'https://lib.lumen.com/fonts/google-material-icons/Material-Symbols-Outlined.woff2';

const OUTPUT_PATH = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../../../src/chi/components/icons/_material-codepoints.scss'
);

const PUA_START = 0xe000;
const NAME_RE = /^[a-z0-9_]+$/;

/** ASCII a–z (ligature component preference for canonical codepoint). */
const isLowerLetter = (cp: number): boolean => cp >= 0x61 && cp <= 0x7a;

/** Fetches the font and returns sorted `[name, hex]` pairs. */
async function extractCodepoints(): Promise<Array<[string, string]>> {
  const response = await fetch(FONT_URL);

  if (!response.ok) {
    throw new Error(`Failed to download font: HTTP ${response.status} ${response.statusText}`);
  }

  const font: any = (fontkit as any).create(Buffer.from(await response.arrayBuffer()));

  // gid → one canonical cp (glyph can map from many cps; pick lowercased component letter else min cp).
  const gidToCp = new Map<number, number>();
  const isBetter = (candidate: number, current: number | undefined): boolean => {
    if (current === undefined) return true;
    const candidateLower = isLowerLetter(candidate);
    const currentLower = isLowerLetter(current);
    if (candidateLower !== currentLower) return candidateLower;
    return candidate < current;
  };

  for (const cp of font.characterSet as number[]) {
    const glyph = font.glyphForCodePoint(cp);
    if (glyph && isBetter(cp, gidToCp.get(glyph.id))) gidToCp.set(glyph.id, cp);
  }

  const map = new Map<string, number>();

  // 1) post-table name → cp for PUA glyphs.
  for (const cp of font.characterSet as number[]) {
    if (cp < PUA_START) continue;
    const glyph = font.glyphForCodePoint(cp);
    if (!glyph?.name || !NAME_RE.test(glyph.name)) continue;
    const canonical = gidToCp.get(glyph.id);
    if (canonical !== undefined && canonical >= PUA_START) map.set(glyph.name, canonical);
  }

  // 2) GSUB ligature substitutions → alias names.
  for (const lookup of font.GSUB.lookupList.toArray()) {
    let subTables: any[] = [];
    if (lookup.lookupType === 4) subTables = lookup.subTables;
    else if (lookup.lookupType === 7) subTables = lookup.subTables.map((s: any) => s.extension);

    for (const sub of subTables) {
      if (!sub?.ligatureSets) continue;
      const firstGlyphs = expandCoverage(sub.coverage);
      const sets = sub.ligatureSets.toArray ? sub.ligatureSets.toArray() : sub.ligatureSets;

      for (let i = 0; i < sets.length; i++) {
        const firstGid = firstGlyphs[i];
        const set = sets[i].toArray ? sets[i].toArray() : sets[i];

        for (const lig of set) {
          const components = [firstGid, ...(lig.components.toArray ? lig.components.toArray() : lig.components)];
          let name = '';
          let resolvable = true;

          for (const gid of components) {
            const cp = gidToCp.get(gid);
            if (cp === undefined) {
              resolvable = false;
              break;
            }
            name += String.fromCodePoint(cp);
          }

          if (!resolvable || !NAME_RE.test(name) || map.has(name)) continue;

          const resultCp = gidToCp.get(lig.glyph);
          if (resultCp !== undefined && resultCp >= PUA_START) map.set(name, resultCp);
        }
      }
    }
  }

  return [...map.entries()]
    .map(([name, cp]): [string, string] => [name, cp.toString(16)])
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
}

/** GSUB coverage → glyph id list in lookup order. */
function expandCoverage(coverage: any): number[] {
  if (coverage.glyphs) return coverage.glyphs.toArray ? coverage.glyphs.toArray() : coverage.glyphs;
  const ranges = coverage.rangeRecords.toArray ? coverage.rangeRecords.toArray() : coverage.rangeRecords;
  const out: number[] = [];
  for (const range of ranges) {
    for (let gid = range.start; gid <= range.end; gid++) {
      out[range.startCoverageIndex + (gid - range.start)] = gid;
    }
  }
  return out;
}

/** Renders the SCSS file contents from the extracted map. */
function renderScss(entries: Array<[string, string]>): string {
  const header = `// AUTO-GENERATED — DO NOT EDIT BY HAND.
//
// Maps each Material Symbols name to its glyph's Private Use Area codepoint,
// resolved through the font's GSUB ligature table (the path the browser uses)
// so codepoints match the rendered glyphs:
//   ${FONT_URL}
//
// Only PUA glyphs (>= U+E000) are included; the font's Latin letters/digits are
// excluded so they can't leak as text. Rendering codepoints instead of ligature
// names means an unknown name shows nothing and no name flashes before load.
//
// Regenerate with: npm run generate:icon-codepoints
$material-codepoints: (
`;
  const body = entries.map(([name, hex]) => `  '${name}': '${hex}',`).join('\n');
  return `${header}${body}\n);\n`;
}

async function main(): Promise<void> {
  const checkOnly = process.argv.includes('--check');
  const entries = await extractCodepoints();
  const generated = renderScss(entries);

  if (checkOnly) {
    const existing = readFileSync(OUTPUT_PATH, 'utf8');
    if (existing !== generated) {
      console.error(
        '✖ _material-codepoints.scss is out of date with the deployed font.\n' +
          '  Run: npm run generate:icon-codepoints'
      );
      process.exit(1);
    }
    console.log(`✔ _material-codepoints.scss is up to date (${entries.length} icons).`);
    return;
  }

  writeFileSync(OUTPUT_PATH, generated);
  console.log(`✔ Wrote ${entries.length} icons to _material-codepoints.scss`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
