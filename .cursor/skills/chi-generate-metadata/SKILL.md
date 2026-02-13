---
name: chi-generate-metadata
description: Generate and sync MCP metadata for the Chi Design System. Use when the user asks to build, generate, or update the MCP metadata, or to sync Skills/Rules from SCSS sources.
---

# Chi Metadata Generator

## Purpose

This skill manages two related tasks:
1. **Sync Skills** -- Updates auto-generated sections of Skills/Rules files from SCSS sources
2. **Generate Metadata** -- Produces `src/mcp/metadata.json` for the external MCP server

## Location

The metadata generation pipeline lives in `src/mcp/` and is organized into focused modules:

```
src/mcp/
├── config.ts              # Centralized configuration (paths, themes, WC tags, etc.)
├── scripts/
│   ├── generate.ts        # Orchestrator: assembles metadata.json
│   ├── sync-skills.ts     # Updates auto-generated sections in Skills/Rules
│   └── validate.ts        # Post-build validation (16 checks)
├── extractors/
│   ├── extract.ts         # Shared SCSS extraction logic
│   ├── tokens.ts          # Token enrichment
│   ├── utilities.ts       # Utility class generation
│   └── components.ts      # Component processing
└── data/
    ├── tools.json         # MCP tool definitions (19 tools)
    └── static-data.ts     # Tools, anti-patterns, guidelines, schemas, relationships
```

See `src/mcp/README.md` for full architecture documentation.

## How to Generate

```bash
# Sync Skills from SCSS (updates .cursor/ files)
npm run sync:skills

# Generate metadata.json
npm run build:mcp

# Force rebuild (bypass incremental cache)
npm run build:mcp -- --force

# Or run both via full build
npm run build
```

## When to Regenerate

Regenerate when:
- SCSS source files change (new tokens, utilities, or components)
- Tool definitions in `src/mcp/data/tools.json` change
- Anti-patterns or schemas are updated
- A new Chi version is released
- Skills or Rules content changes (for the bundled `cursorSkills`)
