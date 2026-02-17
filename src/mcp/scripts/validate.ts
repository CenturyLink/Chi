import { KNOWN_WC_TAGS } from '../config.js';

export interface ValidationIssue {
  severity: 'error' | 'warning';
  message: string;
}

/** Runs structural and quality checks on the generated metadata. */
export function validateMetadata(metadata: Record<string, unknown>): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  const requiredSections = [
    'version', 'designTokens', 'utilities', 'cssComponents', 'schemas',
    'tools', 'quality', 'searchIndex', 'migration', 'cursorSkills', 'cache',
    'antiPatterns', 'guidelines', 'relationships', 'summary',
  ];

  for (const section of requiredSections) {
    if (!(section in metadata)) {
      issues.push({ severity: 'error', message: `Missing required section: ${section}` });
    }
  }

  const comps = (metadata['cssComponents'] as { components?: { baseClass: string; description?: string; webComponentTag?: string }[] })?.components ?? [];
  const baseClasses = comps.map((c) => c.baseClass);
  const dupComps = baseClasses.filter((v, i) => baseClasses.indexOf(v) !== i);

  if (dupComps.length > 0) {
    issues.push({ severity: 'error', message: `Duplicate components: ${[...new Set(dupComps)].join(', ')}` });
  }

  const schemas = (metadata['schemas'] as Record<string, { name?: string; baseClass?: string; webComponentTag?: string }>) ?? {};

  for (const [key, schema] of Object.entries(schemas)) {
    if (schema.baseClass && schema.baseClass !== key) {
      issues.push({ severity: 'warning', message: `Schema key "${key}" has mismatched baseClass "${schema.baseClass}"` });
    }

    if (schema.name === undefined || schema.name === '') {
      issues.push({ severity: 'error', message: `Schema "${key}" is missing a name` });
    }
  }

  for (const comp of comps) {
    if (comp.webComponentTag && !schemas[comp.baseClass]) {
      issues.push({ severity: 'warning', message: `Component "${comp.baseClass}" has WC tag "${comp.webComponentTag}" but no schema` });
    }
  }

  const tokenCats = (metadata['designTokens'] as Record<string, { tokens?: { description?: string }[] }>) ?? {};
  let totalTokens = 0;
  let tokensWithDesc = 0;

  for (const [key, cat] of Object.entries(tokenCats)) {
    if (key === 'byTheme' || !cat?.tokens) continue;

    for (const t of cat.tokens) {
      totalTokens++;
      if (t.description) tokensWithDesc++;
    }
  }

  if (totalTokens > 0 && tokensWithDesc / totalTokens < 0.5) {
    issues.push({
      severity: 'warning',
      message: `Low token description coverage: ${tokensWithDesc}/${totalTokens} (${Math.round((tokensWithDesc / totalTokens) * 100)}%)`,
    });
  }

  const utilCats = (metadata['utilities'] as { categories?: { classes?: { examples?: string[] }[] }[] })?.categories ?? [];
  let totalUtils = 0;
  let utilsWithExamples = 0;

  for (const cat of utilCats) {
    for (const cls of cat.classes ?? []) {
      totalUtils++;
      if (cls.examples && cls.examples.length > 0) utilsWithExamples++;
    }
  }

  if (totalUtils > 0 && utilsWithExamples / totalUtils < 0.5) {
    issues.push({
      severity: 'warning',
      message: `Low utility examples coverage: ${utilsWithExamples}/${totalUtils} (${Math.round((utilsWithExamples / totalUtils) * 100)}%)`,
    });
  }

  const cursorSkills = metadata['cursorSkills'] as
    | { version?: string; skills?: { name: string; files: { content: string }[] }[]; totalFiles?: number }
    | undefined;

  if (cursorSkills) {
    const actualFiles = (cursorSkills.skills ?? []).reduce((sum, b) => sum + b.files.length, 0);

    if (cursorSkills.totalFiles !== actualFiles) {
      issues.push({ severity: 'error', message: `cursorSkills.totalFiles (${cursorSkills.totalFiles}) doesn't match actual file count (${actualFiles})` });
    }

    for (const bundle of cursorSkills.skills ?? []) {
      for (const file of bundle.files) {
        if (!file.content || file.content.length < 10) {
          issues.push({ severity: 'error', message: `Empty or near-empty file in bundle "${bundle.name}"` });
        }
      }
    }

    if (!cursorSkills.version) {
      issues.push({ severity: 'warning', message: 'cursorSkills.version is missing' });
    } else if (cursorSkills.version !== metadata['version']) {
      issues.push({ severity: 'warning', message: `cursorSkills.version (${cursorSkills.version}) doesn't match metadata version (${metadata['version']})` });
    }
  }

  const cache = metadata['cache'] as { checksums?: Record<string, string> } | undefined;

  if (cache?.checksums) {
    const expectedChecksums = ['tokens', 'utilities', 'cssComponents', 'tools', 'cursorSkills'];

    for (const key of expectedChecksums) {
      if (!cache.checksums[key]) {
        issues.push({ severity: 'error', message: `Missing cache checksum for: ${key}` });
      }
    }
  }

  const genericDescs = comps.filter((c) => c.description?.match(/^Chi .+ component$/));

  if (genericDescs.length > 0) {
    issues.push({
      severity: 'warning',
      message: `${genericDescs.length} component(s) have generic descriptions: ${genericDescs.map((c) => c.baseClass).slice(0, 5).join(', ')}${genericDescs.length > 5 ? '...' : ''}`,
    });
  }

  const schemaCount = Object.keys(schemas).length;
  const compCount = comps.length;

  if (compCount > 0 && schemaCount < compCount) {
    const missing = comps.filter((c) => !schemas[c.baseClass]).map((c) => c.baseClass);

    if (missing.length > 0) {
      issues.push({
        severity: 'warning',
        message: `${missing.length} component(s) lack schemas: ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? '...' : ''}`,
      });
    }
  }

  for (const comp of comps) {
    if (KNOWN_WC_TAGS.has(comp.baseClass) && !comp.webComponentTag) {
      issues.push({ severity: 'error', message: `Component "${comp.baseClass}" is in KNOWN_WC_TAGS but has no webComponentTag mapping` });
    }
  }

  const tools = metadata['tools'] as unknown[] | undefined;

  if (tools) {
    if (!Array.isArray(tools) || tools.length === 0) {
      issues.push({ severity: 'error', message: 'tools section is empty or not an array' });
    } else {
      for (const tool of tools) {
        const t = tool as { name?: string; description?: string; inputSchema?: unknown };

        if (!t.name) issues.push({ severity: 'error', message: 'Tool missing "name" field' });
        if (!t.inputSchema) issues.push({ severity: 'warning', message: `Tool "${t.name ?? '?'}" missing inputSchema` });
      }
    }
  }

  const antiPatterns = metadata['antiPatterns'] as unknown[] | undefined;

  if (antiPatterns) {
    if (!Array.isArray(antiPatterns) || antiPatterns.length === 0) {
      issues.push({ severity: 'error', message: 'antiPatterns section is empty or not an array' });
    }
  }

  const guidelines = metadata['guidelines'] as Record<string, unknown[]> | undefined;

  if (guidelines) {
    const expectedKeys = ['webComponents', 'spacing', 'styling', 'components', 'accessibility'];

    for (const key of expectedKeys) {
      if (!guidelines[key] || !Array.isArray(guidelines[key]) || guidelines[key].length === 0) {
        issues.push({ severity: 'warning', message: `guidelines.${key} is missing or empty` });
      }
    }
  }

  const searchIndex = metadata['searchIndex'] as Record<string, Record<string, string[]>> | undefined;

  if (searchIndex) {
    const expectedKeys = ['tokens', 'utilities', 'cssComponents'];

    for (const key of expectedKeys) {
      if (!searchIndex[key] || Object.keys(searchIndex[key]).length === 0) {
        issues.push({ severity: 'warning', message: `searchIndex.${key} is empty` });
      }
    }
  }

  const migration = metadata['migration'] as { cssToWebComponent?: unknown[] } | undefined;

  if (migration) {
    if (!migration.cssToWebComponent || !Array.isArray(migration.cssToWebComponent)) {
      issues.push({ severity: 'error', message: 'migration.cssToWebComponent is missing or not an array' });
    } else if (migration.cssToWebComponent.length === 0) {
      issues.push({ severity: 'warning', message: 'migration.cssToWebComponent is empty' });
    }
  }

  return issues;
}
