# Chi MCP Metadata

This directory contains the MCP metadata generation pipeline and the generated `metadata.json` consumed by the external Chi MCP server.

## Architecture

```
src/mcp/
├── config.ts                  # Centralized configuration (paths, themes, WC tags, categories, descriptions)
├── metadata.json              # Generated output (gitignored)
├── scripts/
│   ├── generate.ts            # Orchestrator: assembles metadata.json from all modules
│   ├── sync-skills.ts         # Updates Skills/Rules files from SCSS (auto-generated sections)
│   └── validate.ts            # Post-build validation (16 structural + quality checks)
├── extractors/
│   ├── extract.ts             # Shared SCSS extraction logic (components, tokens, utilities, WC mappings)
│   ├── tokens.ts              # Token enrichment (descriptions, examples, categories)
│   ├── utilities.ts           # Utility class generation (spacing, color, opacity, static)
│   └── components.ts          # Component deduplication and categorization
└── data/
    ├── tools.json             # MCP tool definitions (19 tools)
    └── static-data.ts         # Tools, anti-patterns, guidelines, schemas, relationships, skills bundling
```

**Grouping logic:**
- `scripts/` -- Entry-point scripts invoked via npm (orchestrators)
- `extractors/` -- Modules that parse SCSS and enrich data (pure data transforms)
- `data/` -- Static data files and the module that assembles them
- `config.ts` -- Top-level config, shared by all modules

Supporting data lives in Cursor Skills and Rules:

```
.cursor/
├── skills/
│   ├── chi-components/reference.md         # Component descriptions, categories, relationships
│   ├── chi-tokens/reference.md             # Token descriptions, examples, relationships
│   ├── chi-utilities/reference.md          # Utility class reference
│   ├── chi-component-schemas/schemas.json  # Validation schemas (modifiers, conflicts, a11y)
│   ├── chi-search/reference.md             # Synonyms and use-case mappings
│   └── chi-recommendations/SKILL.md        # Implementation approach decision tree
└── rules/
    ├── chi-design-system.md                # Global conventions
    ├── chi-code-validation.md              # Anti-patterns and validation
    └── chi-migration.md                    # CSS-to-WC and modifier-to-prop mappings
```

## Build Flow

```
npm run build
  │
  ├─ 1. sync-skills.ts    ← Updates Skills/Rules from SCSS (auto-generated sections)
  ├─ 2. generate.ts       ← Produces metadata.json from SCSS + Skills
  │     ├─ extractors/     (SCSS parsing + enrichment)
  │     ├─ data/           (tools, schemas, anti-patterns, skills)
  │     └─ validate.ts     (post-build validation)
  └─ 3. Copy to dist/     ← metadata.json → dist/metadata/chi/
```

## Commands

| Command | What it does |
|---------|-------------|
| `npm run sync:skills` | Update Skills/Rules auto-generated sections from SCSS |
| `npm run build:mcp` | Generate `src/mcp/metadata.json` (includes validation) |
| `npm run build:mcp -- --force` | Force rebuild even if no changes detected |
| `npm run build` | Full build (includes both of the above) |

## Output

`metadata.json` contains:

- **version** -- Package version
- **summary** -- Counts and theme list
- **guidelines** -- Best practices, spacing formula, implementation priority
- **tools** -- 19 MCP tool definitions (includes `setup_chi_html_css_cursor_skills`)
- **designTokens** -- Extracted from SCSS, enriched with descriptions and examples
- **utilities** -- Generated (spacing, color, opacity) + static (display, flex, etc.), with examples
- **cssComponents** -- Extracted from SCSS, deduplicated, categorized, with WC mappings
- **searchIndex** -- Keyword search indices with synonyms
- **quality** -- Documentation coverage metrics (tokens, utilities, components, schemas)
- **antiPatterns** -- Common mistakes with severity and corrections
- **schemas** -- Component validation rules with accessibility info
- **relationships** -- Element relationships (tokens → utilities → components)
- **migration** -- CSS-to-WC conversion rules (modifier → property mappings)
- **cursorSkills** -- Bundled user-facing Skills/Rules (14 files) for distribution via `setup_chi_html_css_cursor_skills`
- **cache** -- MD5 checksums and TTL for MCP client caching

## Post-Build Validation

After generating `metadata.json`, `validate.ts` runs 16 structural and quality checks:

1. Required top-level sections exist (including antiPatterns, guidelines, relationships, summary)
2. No duplicate components
3. Schema keys match component baseClass
4. Components with WC tags have schemas
5. Token description coverage above threshold
6. Utility examples coverage above threshold
7. Skills bundle file count is consistent
8. Cache checksums are present
9. No generic component descriptions
10. Schema coverage matches component count
11. WC mapping coverage for known tags
12. Tools have required name and inputSchema fields
13. AntiPatterns section is non-empty array
14. Guidelines has all expected keys (webComponents, spacing, styling, components, accessibility)
15. SearchIndex has non-empty tokens, utilities, and cssComponents indices
16. Migration has valid cssToWebComponent array

If any critical check fails, the build exits with error code 1.

## Incremental Builds

The generator uses `.build-cache.json` (gitignored) to track MD5 hashes of all source files. If no SCSS, config, or skill/rule files have changed since the last build, the build is skipped. Use `--force` to bypass.

## Auto-Sync

Files with `<!-- AUTO-GENERATED:START -->` markers are updated automatically by `sync-skills.ts`. Content outside these markers is preserved. This keeps Skills/Rules in sync with SCSS without manual updates.

Currently auto-synced sections:
- Component list table in `chi-components/reference.md`
- Token list table in `chi-tokens/reference.md`
- CSS-to-WC mapping table in `chi-migration.md`
- Modifier-to-prop tables in `chi-migration.md`
- Schema `allowedModifiers` in `schemas.json`

## Distributable Cursor Skills

The metadata bundles 9 user-facing Skills/Rules (14 files) in the `cursorSkills` section. The `setup_chi_html_css_cursor_skills` MCP tool uses this data to install Chi Skills/Rules into any user's project.

See [.cursor/skills/README.md](../../.cursor/skills/README.md) for the full list and installation instructions.
