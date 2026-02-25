import { writeFileSync } from 'fs';
import { join } from 'path';
import {
  readFile,
  readJSON,
  extractComponents,
  deduplicateComponents,
  extractTokens,
  extractUtilityCategories,
  getWcTag,
  type ComponentInfo,
  type TokenInfo,
} from '../extractors/extract.js';
import {
  SKILLS_DIR,
  RULES_DIR,
  SIZE_MODS,
  COLOR_MODS,
  STATE_MODS,
  POSITION_MODS,
  VARIANT_MODS,
  BOOLEAN_MODS,
} from '../config.js';

const END_MARKER = '<!-- AUTO-GENERATED:END -->';

function replaceAutoSection(filePath: string, sectionId: string, newContent: string): boolean {
  const content = readFile(filePath);

  if (!content) return false;

  const startTag = `<!-- AUTO-GENERATED:START - section:${sectionId} - Do not edit below. Run \`npm run sync:skills\` to update -->`;
  const pattern = new RegExp(
    `<!-- AUTO-GENERATED:START - section:${sectionId}[^>]*-->\\n[\\s\\S]*?<!-- AUTO-GENERATED:END -->`
  );

  if (!pattern.test(content)) return false;

  const updated = content.replace(pattern, `${startTag}\n${newContent}\n${END_MARKER}`);

  if (updated === content) return false;

  writeFileSync(filePath, updated, 'utf-8');
  return true;
}

function inferProp(modifier: string): { prop: string; value: string | boolean } | null {
  const name = modifier.replace(/^-/, '');

  if (SIZE_MODS.has(modifier)) return { prop: 'size', value: name };
  if (COLOR_MODS.has(modifier)) return { prop: 'color', value: name };
  if (POSITION_MODS.has(modifier)) return { prop: 'position', value: name };
  if (VARIANT_MODS.has(modifier)) return { prop: 'variant', value: name };
  if (STATE_MODS.has(modifier)) return { prop: name, value: true };
  if (BOOLEAN_MODS.has(modifier)) return { prop: name, value: true };

  return null;
}

function generateComponentTable(components: ComponentInfo[]): string {
  const lines = [
    '| Component | Base Class | Modifiers | Subcomponents | Web Component |',
    '|-----------|------------|-----------|---------------|---------------|',
  ];

  for (const c of components.sort((a, b) => a.name.localeCompare(b.name))) {
    const wc = getWcTag(c.baseClass) ?? '';
    const mods = c.modifiers.slice(0, 8).join(', ') + (c.modifiers.length > 8 ? ', ...' : '');
    const subs = c.subcomponents.slice(0, 4).join(', ') + (c.subcomponents.length > 4 ? ', ...' : '');

    lines.push(`| ${c.name} | ${c.baseClass} | ${mods} | ${subs} | ${wc ? `\`<${wc}>\`` : ''} |`);
  }

  return lines.join('\n');
}

function generateCssToWcTable(components: ComponentInfo[]): string {
  const lines = ['| CSS Class | Web Component Tag |', '|-----------|-------------------|'];
  const seen = new Set<string>();

  for (const c of components.sort((a, b) => a.baseClass.localeCompare(b.baseClass))) {
    const wc = getWcTag(c.baseClass);

    if (wc && !seen.has(c.baseClass)) {
      seen.add(c.baseClass);
      lines.push(`| ${c.baseClass} | \`<${wc}>\` |`);
    }
  }

  return lines.join('\n');
}

function generateTokenTable(tokens: TokenInfo[]): string {
  const lines = ['| Token | SCSS Value |', '|-------|------------|'];

  for (const t of tokens) {
    const val = t.value.length > 60 ? t.value.substring(0, 57) + '...' : t.value;

    lines.push(`| ${t.name} | \`${val}\` |`);
  }

  return lines.join('\n');
}

function generateModifierPropTable(components: ComponentInfo[]): string {
  const byBase = new Map<string, Set<string>>();

  for (const c of components) {
    const wc = getWcTag(c.baseClass);

    if (!wc || c.modifiers.length === 0) continue;

    const existing = byBase.get(c.baseClass) ?? new Set<string>();

    c.modifiers.forEach((m) => existing.add(m));
    byBase.set(c.baseClass, existing);
  }

  const sections: string[] = [];

  for (const [baseClass, mods] of [...byBase.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    const mappings = [...mods].map((mod) => ({ mod, inferred: inferProp(mod) })).filter((m) => m.inferred !== null);

    if (mappings.length === 0) continue;

    const lines = [`### ${baseClass}`, '| CSS Modifier | Property | Value |', '|-------------|----------|-------|'];

    for (const { mod, inferred } of mappings) {
      const val = typeof inferred!.value === 'boolean' ? '(boolean)' : `\`"${inferred!.value}"\``;

      lines.push(`| \`${mod}\` | \`${inferred!.prop}\` | ${val} |`);
    }

    sections.push(lines.join('\n'));
  }

  return sections.join('\n\n');
}

function mergeSchemas(components: ComponentInfo[]): boolean {
  const schemaPath = join(SKILLS_DIR, 'chi-component-schemas/schemas.json');
  const existing = readJSON<Record<string, Record<string, unknown>>>(schemaPath) ?? {};
  let changed = false;

  for (const c of components) {
    const wc = getWcTag(c.baseClass);

    if (!wc) continue;

    if (existing[c.baseClass]) {
      const schema = existing[c.baseClass]!;
      const currentMods = (schema['allowedModifiers'] as string[]) ?? [];
      const newMods = c.modifiers.filter((m) => !currentMods.includes(m));

      if (newMods.length > 0) {
        schema['allowedModifiers'] = [...currentMods, ...newMods];
        changed = true;
        console.log(`  + ${c.baseClass}: added ${newMods.length} new modifiers: ${newMods.join(', ')}`);
      }
    } else {
      existing[c.baseClass] = {
        name: c.name,
        baseClass: c.baseClass,
        webComponentTag: wc,
        allowedModifiers: c.modifiers,
        accessibility: {},
      };
      changed = true;
      console.log(`  + NEW schema: ${c.baseClass} (${c.modifiers.length} modifiers)`);
    }
  }

  if (changed) {
    writeFileSync(schemaPath, JSON.stringify(existing, null, 2) + '\n', 'utf-8');
  }

  return changed;
}

function sync() {
  console.log('\n🔄 Syncing Skills from SCSS sources...\n');
  console.log('📊 Scanning SCSS files...');

  const components = deduplicateComponents(extractComponents(false));
  const tokens = extractTokens();
  const utilCategories = extractUtilityCategories();

  console.log(
    `   Found ${components.length} components, ${tokens.length} tokens, ${utilCategories.length} utility categories\n`
  );

  let totalChanges = 0;

  console.log('📝 Updating chi-components/reference.md...');
  if (
    replaceAutoSection(
      join(SKILLS_DIR, 'chi-components/reference.md'),
      'component-list',
      generateComponentTable(components)
    )
  ) {
    console.log('   ✓ Component list updated');
    totalChanges++;
  } else {
    console.log('   - No changes');
  }

  console.log('📝 Updating chi-migration.md...');
  const wcChanged = replaceAutoSection(
    join(RULES_DIR, 'chi-migration.md'),
    'css-to-wc',
    generateCssToWcTable(components)
  );
  const modChanged = replaceAutoSection(
    join(RULES_DIR, 'chi-migration.md'),
    'modifier-to-prop',
    generateModifierPropTable(components)
  );

  if (wcChanged || modChanged) {
    console.log('   ✓ Migration rules updated');
    totalChanges++;
  } else {
    console.log('   - No changes');
  }

  console.log('📝 Updating chi-tokens/reference.md...');
  if (replaceAutoSection(join(SKILLS_DIR, 'chi-tokens/reference.md'), 'token-list', generateTokenTable(tokens))) {
    console.log('   ✓ Token list updated');
    totalChanges++;
  } else {
    console.log('   - No changes');
  }

  console.log('📝 Updating chi-component-schemas/schemas.json...');
  if (mergeSchemas(components)) {
    console.log('   ✓ Schemas updated');
    totalChanges++;
  } else {
    console.log('   - No changes');
  }

  console.log(`\n✨ Sync complete! ${totalChanges} file(s) updated.\n`);

  if (totalChanges > 0) {
    console.log('💡 Review changes with: git diff .cursor/\n');
  }
}

sync();
