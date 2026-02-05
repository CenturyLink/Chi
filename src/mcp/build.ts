/**
 * Chi MCP Metadata Builder
 *
 * Main entry point for generating the metadata.json file used by the MCP server.
 * Orchestrates extraction, validation, and assembly of all metadata.
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { extractTokens } from './extractors/tokens/index.js';
import { extractUtilities, validateAllUtilities } from './extractors/utilities/index.js';
import { extractCSSComponents } from './extractors/cssComponents/index.js';
import { extractChangelog } from './extractors/changelog/index.js';
import { TOOLS } from './tools/index.js';
import { ANTI_PATTERNS } from './validation/antiPatterns.js';
import { COMPONENT_SCHEMAS } from './validation/schemas.js';
import { UTILITY_RELATIONSHIPS, COMPONENT_RELATIONSHIPS, TOKEN_RELATIONSHIPS } from './validation/relationships.js';
import { createMigrationRules } from './validation/migration.js';
import { buildSearchIndex } from './builders/searchIndex.js';
import { calculateQualityMetrics } from './builders/quality.js';
import { buildMetadata } from './builders/metadata.js';
import { applyPerformanceMetadata } from './builders/performance.js';
import { getVersion, createChecksums, logger, type MetadataChecksums } from './utils/helpers.js';
import { validateForCentralRepo } from './interop/exports.js';
import type { CSSComponents, CacheInfo, ChangelogInfo } from './types/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '../..');
const OUTPUT_PATH = join(__dirname, 'metadata.json');

/** Cache TTL in seconds (24 hours) */
const CACHE_TTL_SECONDS = 86400;

/**
 * Builds and writes the complete metadata.json file.
 */
async function build(): Promise<void> {
  console.log('\n🚀 Building Chi MCP Metadata...\n');
  const start = Date.now();

  logger.phase(1, 'Extracting data');
  const designTokens = extractTokens();
  const utilities = extractUtilities();

  logger.section('🎨', 'Extracting CSS components');
  const cssComponentsList = extractCSSComponents();
  const cssComponents: CSSComponents = {
    components: cssComponentsList,
    totalComponents: cssComponentsList.length,
    categories: [...new Set(cssComponentsList.map((c) => c.category))],
  };

  logger.success(`Extracted ${cssComponents.totalComponents} CSS components`, true);
  logger.section('📋', 'Extracting changelog');

  const changelog: ChangelogInfo | null = extractChangelog(10);

  if (changelog) {
    logger.success(`Chi version ${changelog.currentVersion} (${changelog.releaseDate})`, true);
    logger.success(
      `Extracted ${changelog.recentVersions.length} recent versions from ${changelog.totalVersions} total`,
      true
    );
  } else {
    logger.warn('Changelog not available');
  }

  logger.phase(2, 'Validating');
  const allUtilityClasses = utilities.categories.flatMap((cat) => cat.classes);
  const validation = validateAllUtilities(allUtilityClasses);

  if (validation.valid) {
    logger.success('All utility classes have correct format (double-dash syntax)', true);
  } else {
    logger.warn(`Found ${validation.errors.length} format issues`);
    validation.errors.slice(0, 3).forEach((err) => {
      console.warn(`    ${err.className} → ${err.suggestion}`);
    });
  }

  logger.phase(3, 'Enriching data');
  applyPerformanceMetadata(cssComponents.components);
  logger.success('Added performance hints to CSS components', true);

  const migrationRules = createMigrationRules();

  logger.success(`Created ${migrationRules.cssToWebComponent.length} migration rules`, true);
  logger.phase(4, 'Building indices');

  const searchIndex = buildSearchIndex(designTokens, utilities, cssComponents);

  logger.success(`Indexed ${Object.keys(searchIndex.tokens).length} token keywords`, true);
  logger.success(`Indexed ${Object.keys(searchIndex.utilities).length} utility keywords`, true);
  logger.success(`Indexed ${Object.keys(searchIndex.cssComponents).length} component keywords`, true);

  logger.phase(5, 'Calculating quality metrics');

  const quality = calculateQualityMetrics(designTokens, utilities, cssComponents);

  logger.success(`Tokens: ${quality.tokensWithDescriptions}/${quality.totalTokens} documented`, true);
  logger.success(`Utilities: ${quality.utilitiesWithDescriptions}/${quality.totalUtilities} documented`, true);
  logger.success(
    `CSS Components: ${quality.cssComponentsWithDescriptions}/${quality.totalCssComponents} documented`,
    true
  );
  logger.success(`Average description length: ${quality.averageDescriptionLength} chars`, true);
  logger.phase(6, 'Assembling metadata');

  const metadata = buildMetadata({
    version: getVersion(ROOT),
    designTokens,
    utilities,
    cssComponents,
    searchIndex,
    quality,
    tools: TOOLS,
    antiPatterns: ANTI_PATTERNS,
    schemas: COMPONENT_SCHEMAS,
    relationships: {
      utilities: UTILITY_RELATIONSHIPS,
      components: COMPONENT_RELATIONSHIPS,
      tokens: TOKEN_RELATIONSHIPS,
    },
    migration: migrationRules,
  });

  logger.phase(7, 'Validating metadata');

  const metadataValidation = validateForCentralRepo(metadata);

  if (metadataValidation.valid) {
    logger.success('Metadata valid', true);
  } else {
    metadataValidation.errors.forEach((err) => logger.error(err));
  }

  metadataValidation.warnings.forEach((warn) => logger.warn(warn));

  const checksums: MetadataChecksums = createChecksums(metadata);
  const cacheInfo: CacheInfo = {
    checksums,
    ttl: CACHE_TTL_SECONDS,
  };

  metadata.cache = cacheInfo;

  if (changelog) {
    metadata.changelog = changelog;
  }

  const jsonOutput = JSON.stringify(metadata, null, 2);

  writeFileSync(OUTPUT_PATH, jsonOutput, 'utf-8');

  const fileSizeKB = Math.round(Buffer.from(jsonOutput).length / 1024);
  const duration = ((Date.now() - start) / 1000).toFixed(2);

  console.log('\n✨ Build Complete!\n');
  console.log('📊 Summary:');
  logger.summary('Package Version', metadata.version);
  logger.summary('Chi Version', changelog?.currentVersion ?? 'N/A');
  logger.summary('Tokens', quality.totalTokens);
  logger.summary('Utilities', metadata.summary.totalUtilityClasses);
  logger.summary('CSS Components', metadata.summary.totalCssComponents);
  logger.summary('Tools', metadata.tools.length);
  logger.summary('Anti-patterns', metadata.antiPatterns?.length ?? 0);
  logger.summary('Migration rules', migrationRules.cssToWebComponent.length);
  logger.summary('Changelog entries', changelog?.totalVersions ?? 0);
  logger.summary('Duration', `${duration}s`);
  console.log('\n📁 Output:');
  console.log(`   metadata.json (${fileSizeKB} KB)`);
  console.log(`   Cache checksums: ${Object.values(checksums).join(', ')}`);
  console.log('\n💡 Web Components are the PRIMARY recommended approach.');
}

build().catch((error) => {
  console.error('\n❌ Build failed:', error);
  process.exit(1);
});
