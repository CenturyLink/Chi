---
applyTo: "**/*.{html,vue,tsx,jsx,scss,css,ts,js}"
---
# chi — Instructions for AI Agents

When helping with **consuming** the Chi Design System (Lumen's HTML/CSS design system providing tokens, utilities, and CSS components), use the project documentation and MCP tools described below.

## Where to look

All documentation lives under this directory (the same folder that contains this file). All `.md` files use `applyTo` YAML frontmatter, compatible with both Cursor and VSCode Copilot.

- **Rules / Instructions (conventions, validation, migration):**
  - `chi-design-system.md` — Global conventions, double-dash utility syntax, spacing system, themes
  - `chi-code-validation.md` — Anti-pattern detection, modifier validation, accessibility rules
  - `chi-migration.md` — CSS-to-Web Component mappings, modifier-to-property tables

- **Skills / Snippets (reference data, examples):**
  - `chi-components/` — CSS component reference, modifiers, BEM structure, WC equivalents
  - `chi-tokens/` — Design tokens: SCSS variables, categories, theme-specific values
  - `chi-utilities/` — Utility classes: spacing, color, display, flex, typography
  - `chi-component-schemas/` — Validation schemas, allowed modifiers, accessibility
  - `chi-search/` — Semantic search with synonyms and use-case mappings
  - `chi-recommendations/` — Implementation approach decision tree (Vue/WC/CSS)

Use **rules/instructions** for correct conventions and validation; use **skills/snippets** for reference data and examples.

## MCP tools

If the Chi MCP server is configured (e.g. `@centurylink/chi-mcp-server`), use these tools for the most accurate and up-to-date information:

| Tool | Use when |
|------|----------|
| `list_chi_css_components` | Discover components or check if one exists. Optionally filter by category. |
| `get_chi_css_component_info` | You need modifiers, BEM structure, or WC equivalent for a specific component. |
| `get_chi_utility_info` | Looking up a utility class name, CSS properties, and allowed values. |
| `get_design_token_info` | Looking up a token name, value, and theme-specific overrides. |
| `search_by_keyword` | Searching across all Chi elements (tokens, utilities, components) by keyword. |
| `validate_chi_code` | After writing HTML/CSS, to ensure it follows Chi best practices and conventions. |
| `recommend_chi_implementation` | Getting implementation approach recommendation (Vue vs WC vs HTML/CSS). |

## If MCP is not configured

When no MCP server is available, use the rules/instructions and reference files directly (all paths below are relative to this directory):

1. **Find a component** — read `chi-components/reference.md` for a categorized component index.
2. **Get its modifiers** — read `chi-component-schemas/schemas.json` for allowed modifiers, conflicts, and accessibility.
3. **Look up utilities** — read `chi-utilities/reference.md` for all utility classes with examples.
4. **Look up tokens** — read `chi-tokens/reference.md` for SCSS variables and theme values.
5. **Validate manually** — apply the rules in `chi-code-validation.md` by inspection.

## Key facts

- **Spacing formula**: `space(N) = (N/2)rem` — each step is 8px at 16px root
- **Double-dash syntax**: ALL utility classes use `--` before values: `-p--4`, `-bg--primary`
- **Themes**: lumen, brightspeed, centurylink, colt, portal, connect
- **Implementation priority**: Chi Vue > Chi Web Components > Chi HTML/CSS
- **CSS loading**: Requires `<link>` to Chi CSS and `chi` class on `<html>` element
- Components use BEM methodology with `chi-` prefix (e.g., `chi-button`, `chi-modal`)
- Custom Elements use the same `chi-` tag prefix (e.g., `<chi-button>`, `<chi-modal>`)

## Summary

- **Rules / Instructions:** `chi-design-system.md`, `chi-code-validation.md`, `chi-migration.md`
- **Skills / Snippets:** `chi-components/`, `chi-tokens/`, `chi-utilities/`, `chi-component-schemas/`, `chi-search/`, `chi-recommendations/`
- **Validate:** MCP tool `validate_chi_code` with HTML/CSS code (or apply `chi-code-validation.md` manually if MCP is unavailable).

For more detail on structure and installation, see `README.md` in this directory.
