# Chi MCP Metadata Generator

Generates comprehensive metadata for the Chi Design System MCP server.

## Architecture

```
src/mcp/
├── build.ts                    # Main entry point
├── metadata.json               # Generated output (includes cache info)
├── README.md                   # This file
│
├── config/                     # Configuration
│   ├── constants.ts           # Themes, mappings, component props
│   ├── patterns.ts            # Centralized validation patterns
│   └── guidelines.ts          # Best practices (Web Components first!)
│
├── types/                      # TypeScript definitions
│   └── index.ts               # All interfaces and types
│
├── extractors/                 # Data extraction
│   ├── tokens/                # Design token extraction
│   │   ├── index.ts          # Main extraction logic
│   │   ├── parser.ts         # SCSS variable parsing
│   │   ├── categorizer.ts    # Token categorization
│   │   └── metadata.ts       # Descriptions and examples
│   │
│   ├── utilities/             # Utility class extraction
│   │   ├── index.ts          # Main extraction + validation
│   │   ├── spacing.ts        # Spacing utility generator
│   │   ├── color.ts          # Color utility generator
│   │   ├── opacity.ts        # Opacity utility generator
│   │   ├── parser.ts         # SCSS parsing
│   │   ├── categories.ts     # Category definitions
│   │   └── validator.ts      # Format validation (double-dash)
│   │
│   ├── cssComponents/         # CSS component extraction
│   │   ├── index.ts          # Main extraction logic
│   │   ├── parser.ts         # SCSS component parsing
│   │   ├── generators.ts     # Example generation
│   │   └── metadata.ts       # Descriptions and categories
│   │
│   └── changelog/             # Changelog extraction
│       └── index.ts          # Parses CHANGELOG.md for version history
│
├── builders/                   # Metadata assembly
│   ├── metadata.ts           # Final assembly
│   ├── searchIndex.ts        # Keyword search index
│   ├── quality.ts            # Quality metrics
│   └── performance.ts        # Performance hints
│
├── validation/                 # Validation & migration
│   ├── antiPatterns.ts       # Common mistakes
│   ├── schemas.ts            # Component validation rules
│   ├── relationships.ts      # Element relationships
│   ├── migration.ts          # HTML → Web Component migration
│   └── crossMcp.ts           # Cross-MCP conflict detection
│
├── interop/                    # Central repository integration
│   ├── index.ts              # Module exports
│   ├── types.ts              # Interop type definitions
│   ├── exports.ts            # Export functions
│   ├── recommendation.ts     # Approach recommendation engine
│   └── schema.ts             # Contract with central repo
│
├── tools/                      # MCP tool definitions
│   └── index.ts              # 18 MCP tools
│
└── utils/                      # Helpers
    └── helpers.ts            # Utility functions
```

## Key Features

### 1. Web Components First
The metadata strongly recommends **Chi Web Components (Custom Elements)** as the primary approach:
- Better developer experience
- Type safety
- Built-in interactivity
- Automatic accessibility handling

HTML/CSS is available as fallback for legacy browser support or when explicitly requested.

### 2. Utility Format Validation
All utilities use **double-dash syntax** and are validated:
- ✅ Correct: `-p--4`, `-bg--primary`, `-opacity--60`
- ❌ Wrong: `-p-4`, `-bg-primary`, `-opacity-60`

The validator automatically detects and suggests corrections.

### 3. HTML to Web Component Migration
The `migration.ts` module provides:
- CSS class to Web Component property mapping
- Automatic migration suggestions
- Preservation of utility classes on Web Components

Example migration:
```html
<!-- Before (CSS) -->
<button class="chi-button -primary -lg">Click</button>

<!-- After (Web Component) -->
<chi-button color="primary" size="lg">Click</chi-button>
```

### 4. Comprehensive Search Index
Semantic search with synonyms for discoverability:
- "center" → finds `-mx--auto`, `-justify-content--center`
- "error" → finds `-text--danger`, `chi-alert`, `-bg--danger`
- "button" → finds `chi-button`, `-primary`, `-secondary`

## Usage

### Build Metadata
```bash
npm run build:mcp
```

### Output
Generates `src/mcp/metadata.json` with:
- 35+ design tokens across 6 categories
- 283 utility classes (with validation)
- 55 CSS components (with Web Component mappings)
- 18 MCP tools
- 22 anti-patterns (with Web Component alternatives)
- 30 migration rules
- 231 changelog entries (version history)
- Quality metrics and search indices
- Cache checksums for efficient invalidation

## MCP Tools (18 total)

| Tool | Description |
|------|-------------|
| `get_chi_version` | **Current version and changelog** - What's new in Chi |
| `recommend_chi_implementation` | **USE FIRST** - Recommends Web Components |
| `get_design_token_info` | Token details (shared across approaches) |
| `list_design_tokens` | Browse tokens by category/theme |
| `get_chi_utility_info` | Utility class details |
| `list_chi_utilities` | Browse utilities by category |
| `generate_chi_html_snippet` | HTML generator (fallback) |
| `get_chi_css_component_info` | CSS component details |
| `list_chi_css_components` | Browse CSS components |
| `validate_chi_code` | Code validation + anti-pattern detection |
| `suggest_related_utilities` | Relationship discovery |
| `search_by_keyword` | Semantic search |
| `get_component_schema` | Validation rules |
| `migrate_html_to_webcomponent` | HTML to Web Component migration |
| `validate_cross_mcp` | Detect conflicts in mixed codebases |
| `get_unified_recommendation` | Approach recommendation based on context |
| `get_migration_path` | Step-by-step migration guidance |
| `get_interop_data` | Central repository integration data |

## Integration with Chi MCP Server

This metadata is designed to work with:
1. **Chi Vue MCP** - Vue 3 component metadata
2. **Chi Custom Elements MCP** - Web Component metadata
3. **Chi HTML/CSS MCP** - This metadata (utilities, tokens, CSS components)

All three can be combined to provide comprehensive Chi Design System assistance.

## Guidelines

### Spacing
- Use utility classes: `-p--4`, `-m--2`, `-g--3`
- Double-dash syntax required
- Gap utilities preferred over component modifiers

### Colors
- Semantic colors: `-bg--success`, `-text--danger`
- Support variations: `-light`, `-lighter`

### Components
- **Prefer Web Components** over CSS classes
- Utility classes work on Web Components: `<chi-button class="-p--4">`

## Changelog Integration

The metadata includes version history extracted from `@centurylink/chi-documentation`:

```json
{
  "changelog": {
    "currentVersion": "6.87.0",
    "releaseDate": "Jan 29, 2026",
    "recentVersions": [
      {
        "version": "6.87.0",
        "date": "Jan 29, 2026",
        "changes": [
          {
            "category": "Components",
            "type": "Added",
            "items": ["Modal web component now supports `title` property on simple mode."]
          }
        ]
      }
    ],
    "totalVersions": 231
  }
}
```

Use the `get_chi_version` tool to:
- Check the current Chi version
- View recent changes (Added, Changed, Fixed, Removed, Deprecated)
- Get changes for a specific version

## Cache System

The metadata includes embedded cache information for efficient invalidation:

```json
{
  "cache": {
    "checksums": {
      "tokens": "e13f3dac",
      "utilities": "9bc3be7b",
      "cssComponents": "9375dbe2",
      "tools": "c5817cf1"
    },
    "ttl": 86400
  }
}
```

- **checksums**: MD5 hashes (8 chars) of each section
- **ttl**: Time-to-live in seconds (24 hours default)

Consumers can compare checksums to detect changes without parsing the full file.

## Quality Metrics

The build calculates:
- Documentation coverage (tokens, utilities, components)
- Average description length
- Examples coverage

Target: 100% coverage with meaningful descriptions.
