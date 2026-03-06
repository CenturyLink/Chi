#!/usr/bin/env tsx
/**
 * Chi CSS Custom Properties — build entry point.
 * Generates css-variables.scss and dist/tokens/*.json per theme.
 *
 * Usage:
 *   tsx scripts/build/css/vars/build.ts
 *   tsx scripts/build/css/vars/build.ts --theme=lumen --json-only
 */

import * as fs from 'fs';
import * as path from 'path';
import * as sass from 'sass';
import type { Theme, Layer, ScssVariable, GeneratedOutput, TokenMetadata, TokenEntry } from './types.js';
import {
  THEMES,
  LAYERS,
  PREFIX,
  FOUNDATION_PATTERNS,
  SEMANTIC_PATTERNS,
  EXCLUDE_PATTERNS,
  ALL_SYNTHETIC_TOKENS,
  SYNTHETIC_SCALES_LABELS,
} from './constants.js';

const REPO_ROOT = path.resolve(import.meta.dirname, '..', '..', '..', '..');
const SRC_ROOT = path.join(REPO_ROOT, 'src', 'chi');
const THEMES_DIR = path.join(SRC_ROOT, 'themes');
const GLOBAL_VARS_FILE = path.join(SRC_ROOT, '_global-variables.scss');
const DIST_TOKENS_DIR = path.join(REPO_ROOT, 'dist', 'tokens');

function parseScssVariables(filePath: string): ScssVariable[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const variables: ScssVariable[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const match = line.match(/^\$([a-zA-Z0-9_-]+)\s*:\s*(.+)$/);

    if (match) {
      const name = match[1];
      let rawValuePart = match[2];

      if (!rawValuePart.includes(';') || (rawValuePart.includes('(') && !rawValuePart.includes(')'))) {
        while (i + 1 < lines.length && !rawValuePart.includes(';')) {
          i++;
          rawValuePart += ' ' + lines[i].trim();
        }
      }

      const semicolonIdx = rawValuePart.lastIndexOf(';');
      let value = semicolonIdx >= 0 ? rawValuePart.slice(0, semicolonIdx).trim() : rawValuePart.trim();
      let comment: string | undefined;
      const commentMatch = rawValuePart.match(/\/\/\s*(.+?)$/);

      if (commentMatch) {
        comment = commentMatch[1].trim();

        if (value.includes('//')) value = value.split('//')[0].trim();
      }

      const layer = classifyToken(`$${name}`, value);

      variables.push({ name, rawValue: value, comment, line: i + 1, layer });
    }
    i++;
  }

  return variables;
}

function classifyToken(fullName: string, value: string): ScssVariable['layer'] {
  for (const pattern of EXCLUDE_PATTERNS) {
    if (pattern.test(fullName)) return 'excluded';
  }

  if (value.startsWith('(') || value.includes('linear-gradient')) return 'excluded';

  for (const pattern of FOUNDATION_PATTERNS) {
    if (pattern.test(fullName)) return 'foundation';
  }

  for (const pattern of SEMANTIC_PATTERNS) {
    if (pattern.test(fullName)) return 'semantic';
  }

  return 'component';
}

function toCssCustomProp(scssName: string): string {
  return `--${PREFIX}-${scssName}`;
}

function toScssInterpolation(scssVarName: string): string {
  return `#{$${scssVarName}}`;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function groupFoundationTokens(tokens: ScssVariable[]): Map<string, ScssVariable[]> {
  const groups = new Map<string, ScssVariable[]>();
  const order: string[] = [];

  function addToGroup(name: string, token: ScssVariable) {
    if (!groups.has(name)) {
      groups.set(name, []);
      order.push(name);
    }

    groups.get(name)!.push(token);
  }

  for (const token of tokens) {
    const n = token.name;

    if (n.startsWith('font-family-')) addToGroup('Typography - Font Family', token);
    else if (n.match(/^font-size-(3xl|2xl|xl|lg|md|sm|xs|2xs|base)$/))
      addToGroup('Typography - Font Size (Text)', token);
    else if (n.match(/^font-size-h\d$/)) addToGroup('Typography - Font Size (Headings)', token);
    else if (n.match(/^font-weight-(light|normal|medium|semi-bold|bold|extra-bold|black|base)$/))
      addToGroup('Typography - Font Weight', token);
    else if (n.match(/^font-weight-h\d$/)) addToGroup('Typography - Font Weight (Headings)', token);
    else if (n.match(/^line-height-(base|xl|lg|md|sm)$/)) addToGroup('Typography - Line Height', token);
    else if (n.match(/^line-height-h\d$/)) addToGroup('Typography - Line Height (Headings)', token);
    else if (n.startsWith('color-grey-')) addToGroup('Colors - Grey Ramp', token);
    else if (n.startsWith('color-red-')) addToGroup('Colors - Red Ramp', token);
    else if (n.startsWith('color-pink-')) addToGroup('Colors - Pink Ramp', token);
    else if (n.startsWith('color-purple-')) addToGroup('Colors - Purple Ramp', token);
    else if (n.startsWith('color-indigo-')) addToGroup('Colors - Indigo Ramp', token);
    else if (n.startsWith('color-navy-')) addToGroup('Colors - Navy Ramp', token);
    else if (n.startsWith('color-bright-blue-')) addToGroup('Colors - Bright Blue Ramp', token);
    else if (n.startsWith('color-blue-')) addToGroup('Colors - Blue Ramp', token);
    else if (n.startsWith('color-cyan-')) addToGroup('Colors - Cyan Ramp', token);
    else if (n.startsWith('color-teal-blue-')) addToGroup('Colors - Teal Blue Ramp', token);
    else if (n.startsWith('color-teal-')) addToGroup('Colors - Teal Ramp', token);
    else if (n.startsWith('color-mint-')) addToGroup('Colors - Mint Ramp', token);
    else if (n.startsWith('color-green-')) addToGroup('Colors - Green Ramp', token);
    else if (n.startsWith('color-yellow-')) addToGroup('Colors - Yellow Ramp', token);
    else if (n.startsWith('color-orange-')) addToGroup('Colors - Orange Ramp', token);
    else if (n === 'color-black' || n === 'color-white') addToGroup('Colors - Black & White', token);
    else if (n === 'base-unit') addToGroup('Base Unit', token);
    else if (n.startsWith('opacity-')) addToGroup('Opacity Scale', token);
    else if (n.startsWith('border-radius')) addToGroup('Border Radius', token);
    else if (n.startsWith('focus-')) addToGroup('Focus', token);
    else if (n.startsWith('link-')) addToGroup('Link', token);
    else if (n.startsWith('icon-size-')) addToGroup('Icon Sizing', token);
    else if (n.match(/-breakpoint$/)) addToGroup('Breakpoints', token);
    else if (n.startsWith('zindex-')) addToGroup('Z-Index Scale', token);
    else addToGroup('Other Foundation', token);
  }

  const result = new Map<string, ScssVariable[]>();

  for (const key of order) result.set(key, groups.get(key)!);

  return result;
}

function groupSemanticTokens(tokens: ScssVariable[]): Map<string, ScssVariable[]> {
  const groups = new Map<string, ScssVariable[]>();
  const order: string[] = [];

  function addToGroup(name: string, token: ScssVariable) {
    if (!groups.has(name)) {
      groups.set(name, []);
      order.push(name);
    }

    groups.get(name)!.push(token);
  }

  for (const token of tokens) {
    const n = token.name;

    if (n.startsWith('color-text-')) addToGroup('Text Colors', token);
    else if (n.startsWith('color-icon-')) addToGroup('Icon Colors', token);
    else if (n.startsWith('color-border-')) addToGroup('Border Colors', token);
    else if (n.startsWith('color-background-')) addToGroup('Background Colors', token);
    else addToGroup('Other Semantic', token);
  }

  const result = new Map<string, ScssVariable[]>();

  for (const key of order) result.set(key, groups.get(key)!);

  return result;
}

function generateCssVariablesScss(
  themeVars: ScssVariable[],
  globalVars: ScssVariable[],
  theme: Theme,
  layers: readonly Layer[]
): GeneratedOutput {
  const foundationTokens = layers.includes('foundation')
    ? [...globalVars.filter((v) => v.layer === 'foundation'), ...themeVars.filter((v) => v.layer === 'foundation')]
    : [];
  const semanticTokens = layers.includes('semantic') ? themeVars.filter((v) => v.layer === 'semantic') : [];
  const foundationMap = new Map<string, ScssVariable>();

  for (const v of foundationTokens) foundationMap.set(v.name, v);

  const dedupedFoundation = Array.from(foundationMap.values());
  const syntheticCount = ALL_SYNTHETIC_TOKENS.reduce((sum, arr) => sum + arr.length, 0);
  const foundationCount = dedupedFoundation.length + syntheticCount;
  const semanticCount = semanticTokens.length;
  const totalCount = foundationCount + semanticCount;

  const lines: string[] = [];
  lines.push(`// =============================================================================`);
  lines.push(`// CSS Custom Properties - ${capitalize(theme)} Theme`);
  lines.push(`// Generated by: scripts/build/css/vars/build.ts`);
  lines.push(`// Generated at: ${new Date().toISOString()}`);
  lines.push(`// Total Properties: ${totalCount}`);
  lines.push(`// Foundation: ${foundationCount} | Semantic: ${semanticCount}`);
  lines.push(`// =============================================================================`);
  lines.push('');
  lines.push(`@import '_global-variables';`);
  lines.push(`@import '_variables';`);
  lines.push(`@import '_global-mixins';`);
  lines.push(`@import '_mixins';`);
  lines.push('');
  lines.push('// sass-lint:disable-all');
  lines.push('');

  if (dedupedFoundation.length > 0) {
    lines.push(`// =============================================================================`);
    lines.push(`// Foundation Layer - :root scope`);
    lines.push(`// =============================================================================`);
    lines.push(`:root {`);

    const foundationGroups = groupFoundationTokens(dedupedFoundation);

    for (const [groupName, tokens] of foundationGroups) {
      lines.push(`  // ── ${groupName} ${'─'.repeat(Math.max(0, 60 - groupName.length))}──`);

      for (const token of tokens) {
        const cssName = toCssCustomProp(token.name);
        const scssValue = toScssInterpolation(token.name);
        const comment = token.comment ? ` // ${token.comment}` : '';
        lines.push(`  ${cssName}: ${scssValue};${comment}`);
      }

      lines.push('');
    }

    for (const scale of SYNTHETIC_SCALES_LABELS) {
      lines.push(`  // ── ${scale.label} ${'─'.repeat(Math.max(0, 60 - scale.label.length))}──`);

      for (const syn of scale.tokens) {
        const cssName = toCssCustomProp(syn.name);
        const needsInterpolation = syn.scssExpression.includes('map-get(');
        const value = needsInterpolation ? `#{${syn.scssExpression}}` : syn.scssExpression;
        const comment = syn.comment ? ` // ${syn.comment}` : '';

        lines.push(`  ${cssName}: ${value};${comment}`);
      }

      lines.push('');
    }

    lines.push(`}`);
    lines.push('');
  }

  if (semanticTokens.length > 0) {
    if (dedupedFoundation.length === 0) lines.push(`:root {`);
    else {
      lines.push(`// =============================================================================`);
      lines.push(`// Semantic Layer - :root scope`);
      lines.push(`// =============================================================================`);
      lines.push(`:root {`);
    }

    const semanticGroups = groupSemanticTokens(semanticTokens);

    for (const [groupName, tokens] of semanticGroups) {
      lines.push(`  // ── ${groupName} ${'─'.repeat(Math.max(0, 60 - groupName.length))}──`);

      for (const token of tokens) {
        const cssName = toCssCustomProp(token.name);
        const scssValue = toScssInterpolation(token.name);
        const comment = token.comment ? ` // ${token.comment}` : '';

        lines.push(`  ${cssName}: ${scssValue};${comment}`);
      }

      lines.push('');
    }

    lines.push(`}`);
    lines.push('');
    lines.push(`// =============================================================================`);
    lines.push(`// Legacy Custom Properties (backward compat)`);
    lines.push(`// =============================================================================`);
    lines.push(`%css-variables {`);
    lines.push('  --color-background-primary: #{$color-background-primary};');
    lines.push('  --color-background-secondary: #{$color-background-secondary};');
    lines.push('  --color-link-cta-icon: #{$link-cta-icon-color};');
    lines.push('  --color-marketing-icon-primary: #{$marketing-icon-primary-color};');
    lines.push('  --color-marketing-icon-secondary: #{$marketing-icon-secondary-color};');
    lines.push('  --color-marketing-icon-tertiary: #{$marketing-icon-tertiary-color};');
    lines.push('  --color-marketing-icon-shadow: #{$marketing-icon-shadow-color};');
    lines.push(`}`);
  }

  lines.push('');

  return { scss: lines.join('\n'), foundationCount, semanticCount, totalCount };
}

function resolveTokenValues(theme: Theme): Map<string, string> {
  const resolved = new Map<string, string>();
  const themeDir = path.join(THEMES_DIR, theme);
  const scssPath = path.join(themeDir, 'css-variables.scss');

  try {
    const result = sass.compile(scssPath, {
      loadPaths: [SRC_ROOT, themeDir],
      style: 'expanded',
      silenceDeprecations: ['import' as never, 'global-builtin' as never],
    });
    const CSS_PROP_RE = /^\s*(--chi-[a-z0-9-]+)\s*:\s*(.+?)\s*;/gm;
    let match: RegExpExecArray | null;

    while ((match = CSS_PROP_RE.exec(result.css)) !== null) {
      resolved.set(match[1], match[2]);
    }
  } catch (err) {
    console.warn(`     ⚠ Failed to resolve values for ${theme}:`, (err as Error).message);
  }

  return resolved;
}

function applyResolvedValues(entries: Record<string, TokenEntry>, resolvedMap: Map<string, string>): void {
  for (const entry of Object.values(entries)) {
    const resolved = resolvedMap.get(entry.cssVariable);

    if (resolved) entry.resolvedValue = resolved;
  }
}

function inferTokenType(name: string): string {
  if (name.startsWith('color-') || name.startsWith('focus-color')) return 'color';
  if (name.startsWith('font-family-')) return 'fontFamily';
  if (name.startsWith('font-size-')) return 'fontSize';
  if (name.startsWith('font-weight-')) return 'fontWeight';
  if (name.startsWith('line-height')) return 'lineHeight';
  if (name.startsWith('opacity-')) return 'opacity';
  if (name.startsWith('border-radius')) return 'borderRadius';
  if (name.startsWith('border-width-')) return 'borderWidth';
  if (name.startsWith('icon-size-')) return 'size';
  if (name === 'base-unit') return 'dimension';
  if (name.startsWith('link-')) return 'color';
  if (name.startsWith('shadow-')) return 'shadow';
  if (name.startsWith('spacing-')) return 'spacing';
  if (name.startsWith('duration-')) return 'duration';
  if (name.startsWith('ease')) return 'easing';
  if (name.match(/-breakpoint$/)) return 'breakpoint';
  if (name.startsWith('zindex-')) return 'zIndex';

  return 'other';
}

function inferCategory(name: string): string {
  if (name.startsWith('font-') || name.startsWith('line-height')) return 'typography';
  if (name.startsWith('color-text-')) return 'text-colors';
  if (name.startsWith('color-icon-')) return 'icon-colors';
  if (name.startsWith('color-border-')) return 'border-colors';
  if (name.startsWith('color-background-')) return 'background-colors';
  if (name.startsWith('color-')) return 'color-palette';
  if (name.startsWith('opacity-')) return 'opacity';
  if (name.startsWith('border-radius')) return 'border-radius';
  if (name.startsWith('border-width-')) return 'border-width';
  if (name.startsWith('icon-size')) return 'icon-sizing';
  if (name.startsWith('focus-') || name.startsWith('link-')) return 'interactive';
  if (name === 'base-unit') return 'spacing';
  if (name.startsWith('spacing-')) return 'spacing';
  if (name.startsWith('shadow-')) return 'elevation';
  if (name.startsWith('duration-') || name.startsWith('ease')) return 'motion';
  if (name.match(/-breakpoint$/)) return 'breakpoints';
  if (name.startsWith('zindex-')) return 'z-index';

  return 'other';
}

function generateTokenMetadata(
  themeVars: ScssVariable[],
  globalVars: ScssVariable[],
  theme: Theme,
  generatedOutput: GeneratedOutput
): TokenMetadata {
  const allFoundation = [
    ...globalVars.filter((v) => v.layer === 'foundation'),
    ...themeVars.filter((v) => v.layer === 'foundation'),
  ];
  const foundationMap = new Map<string, ScssVariable>();

  for (const v of allFoundation) foundationMap.set(v.name, v);

  const dedupedFoundation = Array.from(foundationMap.values());
  const semanticTokens = themeVars.filter((v) => v.layer === 'semantic');
  const componentCount = themeVars.filter((v) => v.layer === 'component').length;
  const foundationEntries: Record<string, TokenEntry> = {};

  for (const token of dedupedFoundation) {
    foundationEntries[token.name] = {
      scssVariable: `$${token.name}`,
      cssVariable: toCssCustomProp(token.name),
      rawValue: token.rawValue,
      resolvedValue: '',
      type: inferTokenType(token.name),
      category: inferCategory(token.name),
      ...(token.comment ? { comment: token.comment } : {}),
    };
  }

  for (const synArr of ALL_SYNTHETIC_TOKENS) {
    for (const syn of synArr) {
      foundationEntries[syn.name] = {
        scssVariable: syn.scssExpression.includes('map-get')
          ? `map-get($shadow, ${syn.name.replace('shadow-', '')})`
          : syn.scssExpression,
        cssVariable: toCssCustomProp(syn.name),
        rawValue: syn.scssExpression,
        resolvedValue: '',
        type: inferTokenType(syn.name),
        category: inferCategory(syn.name),
        ...(syn.comment ? { comment: syn.comment } : {}),
      };
    }
  }

  const semanticEntries: Record<string, TokenEntry> = {};

  for (const token of semanticTokens) {
    semanticEntries[token.name] = {
      scssVariable: `$${token.name}`,
      cssVariable: toCssCustomProp(token.name),
      rawValue: token.rawValue,
      resolvedValue: '',
      type: inferTokenType(token.name),
      category: inferCategory(token.name),
      ...(token.comment ? { comment: token.comment } : {}),
    };
  }

  return {
    theme,
    version: '7.0.0',
    generatedAt: new Date().toISOString(),
    tokenCount: {
      foundation: generatedOutput.foundationCount,
      semantic: generatedOutput.semanticCount,
      component: componentCount,
      total: generatedOutput.foundationCount + generatedOutput.semanticCount + componentCount,
      cssCustomProperties: generatedOutput.totalCount,
    },
    tokens: { foundation: foundationEntries, semantic: semanticEntries },
  };
}

export interface BuildOptions {
  themes: Theme[];
  layers: readonly Layer[];
  jsonOnly: boolean;
  dryRun: boolean;
}

export function parseArgs(): BuildOptions {
  const args = process.argv.slice(2);
  let themes = [...THEMES] as Theme[];
  let layers = [...LAYERS] as Layer[];
  let jsonOnly = false;
  let dryRun = false;

  for (const arg of args) {
    if (arg.startsWith('--theme=')) {
      const t = arg.split('=')[1] as Theme;

      if (THEMES.includes(t)) themes = [t];
      else {
        console.error(`Unknown theme: ${t}. Available: ${THEMES.join(', ')}`);
        process.exit(1);
      }
    } else if (arg.startsWith('--layers=')) {
      const layerArg = arg.split('=')[1].split(',') as Layer[];

      layers = layerArg.filter((l) => LAYERS.includes(l));
    } else if (arg === '--json-only') jsonOnly = true;
    else if (arg === '--dry-run') dryRun = true;
    else if (arg === '--help' || arg === '-h') {
      console.log(`
Chi CSS Custom Properties
=========================

Usage: tsx scripts/build/css/vars/build.ts [options]

Options:
  --theme=<name>     Single theme (default: all)
  --layers=foundation,semantic
  --json-only        Only generate JSON metadata
  --dry-run          Print to stdout, no files
  --help, -h         This help

Themes: ${THEMES.join(', ')}
`);
      process.exit(0);
    }
  }
  return { themes, layers, jsonOnly, dryRun };
}

export async function run(options?: BuildOptions): Promise<void> {
  const opts = options ?? parseArgs();
  const { themes, layers, jsonOnly, dryRun } = opts;

  console.log(`\n🎨 Chi CSS Custom Properties`);
  console.log(`   Themes: ${themes.join(', ')}`);
  console.log(`   Layers: ${layers.join(', ')}`);
  console.log(`   Mode: ${dryRun ? 'DRY RUN' : jsonOnly ? 'JSON ONLY' : 'FULL'}\n`);

  const globalVars = parseScssVariables(GLOBAL_VARS_FILE);

  console.log(`   Global variables parsed: ${globalVars.length}`);
  console.log(`     Foundation: ${globalVars.filter((v) => v.layer === 'foundation').length}`);
  console.log('');

  const summaries: { theme: string; foundation: number; semantic: number; total: number }[] = [];

  for (const theme of themes) {
    const varsFile = path.join(THEMES_DIR, theme, '_variables.scss');

    if (!fs.existsSync(varsFile)) {
      console.warn(`   ⚠ Theme "${theme}" variables file not found: ${varsFile}`);
      continue;
    }

    console.log(`   Processing: ${theme}`);

    const themeVars = parseScssVariables(varsFile);

    console.log(`     Variables parsed: ${themeVars.length}`);
    console.log(
      `     Foundation: ${themeVars.filter((v) => v.layer === 'foundation').length} | Semantic: ${
        themeVars.filter((v) => v.layer === 'semantic').length
      } | Component: ${themeVars.filter((v) => v.layer === 'component').length}`
    );

    const output = generateCssVariablesScss(themeVars, globalVars, theme, layers);
    const metadata = generateTokenMetadata(themeVars, globalVars, theme, output);

    summaries.push({
      theme,
      foundation: output.foundationCount,
      semantic: output.semanticCount,
      total: output.totalCount,
    });

    if (dryRun) {
      console.log(`\n--- ${theme}/css-variables.scss (${output.totalCount} properties) ---`);
      console.log(output.scss);
      console.log(`\n--- dist/tokens/${theme}.json ---`);
      console.log(JSON.stringify(metadata, null, 2).slice(0, 500) + '\n...(truncated)');
    } else {
      if (!jsonOnly) {
        const scssPath = path.join(THEMES_DIR, theme, 'css-variables.scss');

        fs.writeFileSync(scssPath, output.scss, 'utf-8');
        console.log(`     ✅ Written: ${path.relative(process.cwd(), scssPath)}`);
      }

      const resolvedMap = resolveTokenValues(theme);

      if (resolvedMap.size > 0) {
        applyResolvedValues(metadata.tokens.foundation, resolvedMap);
        applyResolvedValues(metadata.tokens.semantic, resolvedMap);
        console.log(`     🔍 Resolved ${resolvedMap.size} CSS values`);
      }

      fs.mkdirSync(DIST_TOKENS_DIR, { recursive: true });

      const jsonPath = path.join(DIST_TOKENS_DIR, `${theme}.json`);

      fs.writeFileSync(jsonPath, JSON.stringify(metadata), 'utf-8');
      console.log(`     ✅ Written: ${path.relative(process.cwd(), jsonPath)}`);
    }

    console.log('');
  }

  console.log(`\n📊 Summary`);
  console.log(`${'─'.repeat(60)}`);
  console.log(`${'Theme'.padEnd(15)} ${'Foundation'.padEnd(12)} ${'Semantic'.padEnd(12)} ${'Total'.padEnd(8)}`);
  console.log(`${'─'.repeat(60)}`);

  for (const s of summaries) {
    console.log(
      `${s.theme.padEnd(15)} ${String(s.foundation).padEnd(12)} ${String(s.semantic).padEnd(12)} ${String(s.total).padEnd(8)}`
    );
  }

  console.log(`${'─'.repeat(60)}`);

  if (!dryRun && themes.length === THEMES.length) {
    const DOCS_REPOS = ['matt-chi-documentation', 'chi-documentation'];
    const repoRoot = REPO_ROOT;

    for (const docsDir of DOCS_REPOS) {
      const docsTokensDir = path.join(repoRoot, docsDir, 'public', 'tokens');

      if (fs.existsSync(path.join(repoRoot, docsDir))) {
        fs.mkdirSync(docsTokensDir, { recursive: true });

        for (const file of fs.readdirSync(DIST_TOKENS_DIR)) {
          fs.copyFileSync(path.join(DIST_TOKENS_DIR, file), path.join(docsTokensDir, file));
        }

        console.log(`📋 Synced tokens → ../${docsDir}/public/tokens/`);
      }
    }
  }

  console.log(`\n✨ Done!\n`);
}

const isMain = process.argv[1]?.endsWith('build.ts') ?? false;

if (isMain) {
  run().catch((err) => {
    console.error('Error:', err);
    process.exit(1);
  });
}
