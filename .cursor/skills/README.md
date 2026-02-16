# Chi Design System -- Cursor Skills & Rules

Cursor Skills and Rules that provide Chi Design System intelligence directly in your IDE. They help the AI assistant understand Chi conventions, validate your code, suggest components, and guide migrations.

## Quick Start

**No setup needed inside this repository.** Open the project in Cursor and the rules activate automatically. For skills, just ask the AI naturally:

- *"What modifiers does chi-button support?"*
- *"What's the spacing value for -p--4?"*
- *"Validate this HTML against Chi best practices"*
- *"Migrate this CSS button to a Web Component"*
- *"Should I use Vue or Web Components for my React project?"*

## Available Rules (3)

Rules are always-on guidelines that Cursor applies automatically when editing matching files.

| Rule | File | Glob Pattern | What it does |
|------|------|-------------|-------------|
| **chi-design-system** | `rules/chi-design-system.md` | `**/*.{html,vue,tsx,jsx,scss,css,ts,js}` | Global Chi conventions: implementation priority (Vue > Web Components > HTML/CSS), double-dash utility syntax, spacing system, themes |
| **chi-code-validation** | `rules/chi-code-validation.md` | `**/*.{html,vue,tsx,jsx}` | Anti-pattern detection, utility class format validation, component schema checks, accessibility rules, cross-MCP conflict detection |
| **chi-migration** | `rules/chi-migration.md` | `**/*.{html,vue,tsx,jsx}` | CSS-to-Web Component mappings, modifier-to-property conversion tables, migration steps and examples |

## Available Skills (7)

Skills are invoked on demand when you ask the AI about specific Chi topics.

| Skill | Files | What it does |
|-------|-------|-------------|
| **chi-components** | `SKILL.md` + `reference.md` | Component reference: names, base classes, modifiers, BEM subcomponents, Web Component equivalents, categories |
| **chi-tokens** | `SKILL.md` + `reference.md` | Design tokens: SCSS variables, values, categories (colors, typography, spacing, shadows, breakpoints, z-index), theme-specific tokens |
| **chi-utilities** | `SKILL.md` + `reference.md` | Utility classes: spacing, color, opacity, display, flexbox, typography, sizing, border, position, shadow. Double-dash syntax validation |
| **chi-component-schemas** | `SKILL.md` + `schemas.json` | Validation schemas: allowed modifiers, conflicting modifier groups, required attributes, accessibility requirements per component |
| **chi-search** | `SKILL.md` + `reference.md` | Semantic search: synonym dictionary, use-case mappings (e.g. "center content" finds `-mx--auto`, `-justify-content--center`) |
| **chi-recommendations** | `SKILL.md` | Implementation approach decision tree: framework detection, constraint overrides, confidence levels, code examples for Vue/WC/CSS |
| **chi-generate-metadata** | `SKILL.md` | Internal: pointer to the MCP metadata generation pipeline in `src/mcp/`. Not distributed to end users |

## How to Verify Rules and Skills Are Working

### Verifying Rules

Rules activate automatically based on their `globs` pattern. To confirm:

1. **Open any `.html`, `.vue`, or `.tsx` file** in the project
2. **Ask the AI to review your code** -- e.g., type: *"Review this file for Chi best practices"*
3. **The AI should automatically**:
   - Flag single-dash utilities like `-p-4` and correct them to `-p--4`
   - Suggest Web Components over CSS classes (e.g., `<chi-button>` instead of `<button class="chi-button">`)
   - Detect inline styles and suggest utility class alternatives
   - Reference the spacing formula (N/2 rem, 8px per step)

4. **Write intentionally bad code** to test detection:
   ```html
   <div style="padding: 16px" class="-bg-primary">
     <button class="chi-button -primary -secondary">Click</button>
   </div>
   ```
   The AI should flag: inline style (use `-p--2`), single-dash (`-bg-primary` -> `-bg--primary`), conflicting modifiers (`-primary -secondary`), and suggest `<chi-button>`.

### Verifying Skills

Skills are triggered when you ask about specific topics:

1. **Test chi-components**: *"What are the allowed modifiers for chi-alert?"*
   - Should list modifiers from `reference.md` and `schemas.json`
   - Should suggest `<chi-alert>` Web Component

2. **Test chi-tokens**: *"What is the base-unit token value?"*
   - Should answer: `8px`, explain the spacing formula, and show examples

3. **Test chi-utilities**: *"How do I center a div horizontally?"*
   - Should suggest `-mx--auto` or `-d--flex -justify-content--center`

4. **Test chi-recommendations**: *"I'm building a React app, which Chi approach should I use?"*
   - Should recommend Custom Elements with React-specific notes

### Checking in Cursor Settings

You can also verify that Cursor has detected your rules and skills:

1. Open **Cursor Settings** (Cmd+Shift+P > "Cursor Settings")
2. Go to the **Rules** section -- you should see the 3 Chi rules listed
3. Rules with `globs` patterns will show which file types they apply to

## Installation for External Projects

If you want to use Chi Skills/Rules in a project that is NOT the Chi repository itself:

### Option A: Via Chi MCP Server (automatic)

If you have the Chi MCP server configured, ask the AI:

> "Set up Chi Cursor Skills in my project"

The AI will call the `setup_chi_html_css_cursor_skills` MCP tool, which provides all the file contents needed. The AI then writes them to your project's `.cursor/` directory. (Separate tools will exist for Chi Custom Elements and Chi Vue skills.)

You can also be selective:

> "Install only the Chi rules, not the skills"
> "Install just the chi-components and chi-tokens skills"

### Option B: Git submodule (recommended for teams)

If your organization publishes a dedicated repo with the distributable Skills/Rules, you can add it as a Git submodule:

```bash
# Add as submodule (one-time setup)
git submodule add https://github.com/your-org/chi-cursor-skills.git .cursor/chi
git submodule update --init

# Update to latest version
git submodule update --remote .cursor/chi
```

### Option C: Manual copy

Copy the `.cursor/rules/` and `.cursor/skills/` directories (excluding `chi-generate-metadata/`) into your project.

## Directory Structure

After installation, your project should have:

```
your-project/
└── .cursor/
    ├── rules/
    │   ├── chi-design-system.md       # Global conventions (always active)
    │   ├── chi-code-validation.md     # Anti-pattern detection (always active)
    │   └── chi-migration.md           # Migration rules (always active)
    └── skills/
        ├── chi-components/
        │   ├── SKILL.md               # How to look up components
        │   └── reference.md           # Auto-generated component table
        ├── chi-tokens/
        │   ├── SKILL.md               # How to look up tokens
        │   └── reference.md           # Auto-generated token table
        ├── chi-utilities/
        │   ├── SKILL.md               # How to look up utilities
        │   └── reference.md           # Utility class reference
        ├── chi-component-schemas/
        │   ├── SKILL.md               # How to validate components
        │   └── schemas.json           # Component validation schemas
        ├── chi-search/
        │   ├── SKILL.md               # How to search Chi elements
        │   └── reference.md           # Synonym dictionary + use cases
        └── chi-recommendations/
            └── SKILL.md               # Implementation approach decision tree
```

## What is NOT Distributed

The `chi-generate-metadata/` skill is internal to the Chi repository. It is a lightweight pointer to the metadata generation pipeline in `src/mcp/`. End users do not need it. See [src/mcp/README.md](../../src/mcp/README.md) for pipeline documentation.

## Updating

Skills and Rules are versioned with the Chi package. When a new Chi version is released:

- **With MCP**: Run `setup_chi_html_css_cursor_skills` again to get the latest versions
- **With submodule**: `git submodule update --remote .cursor/chi`
- **With manual copy**: Re-copy the files from the latest Chi release

The auto-generated sections (marked with `<!-- AUTO-GENERATED:START -->` comments) in some files are updated automatically during the Chi build process (`npm run sync:skills`) and reflect the latest SCSS source data.

## MCP Metadata Pipeline

The metadata generation pipeline that powers the Chi MCP Server lives in `src/mcp/`. It:

1. Parses SCSS source files for tokens, utilities, and components
2. Enriches data with descriptions, examples, and categories
3. Bundles Skills/Rules for distribution via the `setup_chi_html_css_cursor_skills` tool
4. Validates output with 16 structural and quality checks
5. Supports incremental builds (skips if no source changes)

Commands:

```bash
npm run sync:skills          # Update auto-generated sections in Skills/Rules
npm run build:mcp            # Generate src/mcp/metadata.json
npm run build:mcp -- --force # Force rebuild (bypass cache)
```

See [src/mcp/README.md](../../src/mcp/README.md) for the full architecture.
