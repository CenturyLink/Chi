import { writeFileSync, readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';
import { readJSON, getWarnings, resetWarnings } from '../extractors/extract.js';
import { ROOT, CHI_SRC, OUTPUT_PATH, BUILD_CACHE_PATH, THEMES } from '../config.js';
import { extractTokens } from '../extractors/tokens.js';
import { extractUtilities } from '../extractors/utilities.js';
import { extractComponents } from '../extractors/components.js';
import {
  loadTools,
  loadAntiPatterns,
  loadSchemas,
  GUIDELINES,
  buildSearchIndex,
  calculateQuality,
  buildMigrationRules,
  RELATIONSHIPS,
  bundleDistributableSkills,
} from '../data/static-data.js';
import { validateMetadata } from './validate.js';

interface BuildCache {
  version: string;
  sourceHashes: Record<string, string>;
  outputHash: string;
}

function hash(data: unknown): string {
  return createHash('md5').update(JSON.stringify(data)).digest('hex').substring(0, 8);
}

function hashFile(path: string): string {
  try {
    return createHash('md5').update(readFileSync(path)).digest('hex').substring(0, 8);
  } catch {
    return '';
  }
}

function getVersion(): string {
  const pkg = readJSON<{ version?: string }>(join(ROOT, 'package.json'));

  return pkg?.version ?? '0.0.0';
}

function collectSourceHashes(): Record<string, string> {
  const hashes: Record<string, string> = {};

  if (existsSync(CHI_SRC)) {
    const hashDir = (dir: string) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const full = join(dir, entry.name);

        if (entry.isDirectory()) hashDir(full);
        else if (entry.name.endsWith('.scss')) hashes[full] = hashFile(full);
      }
    };

    hashDir(CHI_SRC);
  }

  const configFiles = [
    join(ROOT, 'src/mcp/config.ts'),
    join(ROOT, 'src/mcp/data/tools.json'),
    join(ROOT, 'src/mcp/data/static-data.ts'),
    join(ROOT, 'src/mcp/extractors/extract.ts'),
    join(ROOT, 'src/mcp/extractors/tokens.ts'),
    join(ROOT, 'src/mcp/extractors/utilities.ts'),
    join(ROOT, 'src/mcp/extractors/components.ts'),
    join(ROOT, 'src/mcp/scripts/generate.ts'),
    join(ROOT, 'src/mcp/scripts/validate.ts'),
    join(ROOT, '.cursor/skills/chi-component-schemas/schemas.json'),
    join(ROOT, 'package.json'),
  ];

  for (const f of configFiles) {
    hashes[f] = hashFile(f);
  }

  const skillRuleDirs = [join(ROOT, '.cursor/skills'), join(ROOT, '.cursor/rules')];

  for (const dir of skillRuleDirs) {
    if (!existsSync(dir)) continue;

    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        const subDir = join(dir, entry.name);

        if (entry.name === 'chi-generate-metadata') continue;

        for (const f of readdirSync(subDir).filter((f) => f.endsWith('.md') || f.endsWith('.json'))) {
          const full = join(subDir, f);

          hashes[full] = hashFile(full);
        }
      } else if (entry.name.endsWith('.md')) {
        hashes[join(dir, entry.name)] = hashFile(join(dir, entry.name));
      }
    }
  }

  return hashes;
}

function loadBuildCache(): BuildCache | null {
  try {
    return JSON.parse(readFileSync(BUILD_CACHE_PATH, 'utf-8')) as BuildCache;
  } catch {
    return null;
  }
}

function saveBuildCache(cache: BuildCache): void {
  writeFileSync(BUILD_CACHE_PATH, JSON.stringify(cache, null, 2), 'utf-8');
}

function hasSourceChanges(currentHashes: Record<string, string>): boolean {
  const cached = loadBuildCache();

  if (!cached) return true;
  if (cached.version !== getVersion()) return true;

  const currentKeys = Object.keys(currentHashes).sort();
  const cachedKeys = Object.keys(cached.sourceHashes).sort();

  if (currentKeys.length !== cachedKeys.length) return true;

  for (const key of currentKeys) {
    if (currentHashes[key] !== cached.sourceHashes[key]) return true;
  }

  return false;
}

function build() {
  const forceFlag = process.argv.includes('--force');

  resetWarnings();
  console.log('\n🚀 Building Chi MCP Metadata...\n');

  console.log('📊 Checking for changes...');
  const sourceHashes = collectSourceHashes();

  if (!forceFlag && !hasSourceChanges(sourceHashes)) {
    console.log('   ✅ No source changes detected. Skipping build.');
    console.log('   💡 Use --force to rebuild anyway.\n');
    return;
  }

  const start = Date.now();

  console.log('📊 Extracting data...');
  const designTokens = extractTokens();
  const utilities = extractUtilities();
  const cssComponents = extractComponents();

  console.log('📊 Building indices...');
  const searchIndex = buildSearchIndex(designTokens, utilities, cssComponents);
  const quality = calculateQuality(designTokens, utilities, cssComponents);

  console.log('📊 Loading tools and schemas...');
  const tools = loadTools();
  const antiPatterns = loadAntiPatterns();
  const schemas = loadSchemas();
  const migration = buildMigrationRules();

  console.log('📊 Bundling distributable skills...');
  const version = getVersion();
  const cursorSkills = bundleDistributableSkills(version);

  console.log('📊 Assembling metadata...');
  const metadata = {
    version,
    generated: new Date().toISOString(),
    description:
      'Chi Design System Metadata - Use with Chi Custom Elements (Web Components) as primary approach, HTML/CSS as fallback',
    summary: {
      totalTokenCategories: Object.keys(designTokens).filter((k) => k !== 'byTheme').length,
      totalUtilityClasses: utilities.totalClasses,
      totalCssComponents: cssComponents.totalComponents,
      totalTools: tools.length,
      totalCursorSkills: cursorSkills.totalFiles,
      themes: THEMES,
      metadataFormatVersion: '1.0.0',
    },
    guidelines: GUIDELINES,
    tools,
    designTokens,
    utilities,
    cssComponents,
    searchIndex,
    quality,
    antiPatterns,
    schemas,
    relationships: RELATIONSHIPS,
    migration,
    cursorSkills,
    cache: {
      checksums: {
        tokens: hash(designTokens),
        utilities: hash(utilities),
        cssComponents: hash(cssComponents),
        tools: hash(tools),
        cursorSkills: hash(cursorSkills),
      },
      ttl: 86400,
    },
  };

  const metadataJson = JSON.stringify(metadata);

  writeFileSync(OUTPUT_PATH, metadataJson, 'utf-8');
  saveBuildCache({ version, sourceHashes, outputHash: hash(metadata) });

  console.log('🔍 Validating metadata...');
  const issues = validateMetadata(metadata as unknown as Record<string, unknown>);
  const errors = issues.filter((i) => i.severity === 'error');
  const valWarnings = issues.filter((i) => i.severity === 'warning');

  if (errors.length > 0) {
    console.log(`\n❌ Validation FAILED: ${errors.length} error(s), ${valWarnings.length} warning(s)\n`);
    for (const e of errors) console.log(`   ❌ ${e.message}`);
    for (const w of valWarnings) console.log(`   ⚠️  ${w.message}`);
    process.exit(1);
  }

  if (valWarnings.length > 0) {
    console.log(`   ⚠️  ${valWarnings.length} warning(s):`);
    for (const w of valWarnings) console.log(`      - ${w.message}`);
  } else {
    console.log('   ✅ All checks passed');
  }

  const extractWarnings = getWarnings();

  if (extractWarnings.length > 0) {
    console.log(`\n   📋 ${extractWarnings.length} extraction warning(s) (shown above)`);
  }

  const sizeKB = Math.round(Buffer.from(metadataJson).length / 1024);
  const duration = ((Date.now() - start) / 1000).toFixed(2);

  console.log('\n✨ Build Complete!\n');
  console.log(`   Version: ${version}`);
  console.log(
    `   Tokens: ${quality.totalTokens} (descriptions: ${quality.coverage.tokensWithDescriptions}, examples: ${quality.coverage.tokensWithExamples})`
  );
  console.log(`   Utilities: ${utilities.totalClasses} (examples: ${quality.coverage.utilitiesWithExamples})`);
  console.log(`   Components: ${cssComponents.totalComponents}`);
  console.log(`   Schemas: ${Object.keys(schemas).length}`);
  console.log(`   Tools: ${tools.length}`);
  console.log(`   Cursor Skills: ${cursorSkills.totalFiles} files (${cursorSkills.skills.length} bundles)`);
  console.log(`   Duration: ${duration}s`);
  console.log(`   Output: metadata.json (${sizeKB} KB)\n`);
}

build();
