---
name: chi-components
description: Extract and provide information about Chi CSS components (buttons, alerts, modals, cards, etc.). Use when the user asks about Chi components, their modifiers, BEM structure, or Web Component equivalents. Reads SCSS source files directly.
---

# Chi CSS Components

## How to Extract Components

CSS components are defined in `src/chi/components/{name}/`. Some components span multiple SCSS files:
- `{name}.scss` -- main component styles
- `_*.scss` -- partials for variants, states, or sub-elements (e.g., `_label.scss` inside `input-text/`)

**Important**: Some CSS base classes differ from their directory name or Web Component tag:
- `chi-datepicker` (CSS) → `chi-date-picker` (Web Component)
- `chi-epanel` (CSS) → `chi-expansion-panel` (Web Component)

### Parsing Patterns

**Base class** (top-level only, start of line): `/^\.chi-([a-z-]+)\s*\{/m`
**Direct modifiers**: `/&\.-([a-z0-9-]+)/g`
**SCSS map modifiers**: `/@each $var in map-keys($map) { &.-#{$var}` -- resolve by reading the map keys
**BEM subcomponents**: `/&__([a-z0-9-]+)/g`

### Fallback

If SCSS parsing fails or the file doesn't exist, use [reference.md](reference.md) which contains the full auto-generated component table.

## Workflow

When user asks about a component:

1. **Look up reference.md first** -- it has descriptions, categories, modifiers, subcomponents, and WC mappings
2. **For deeper detail**, read the SCSS file to get the full modifier list and CSS properties
3. **Always suggest the Web Component** equivalent if one exists (check the WC column in reference.md)
4. **Check schemas** in `chi-component-schemas/schemas.json` for validation rules and accessibility info

## Response Format

When providing component information, include:
- Component name and base CSS class
- Description and category
- Available modifiers (common ones, note if there are more)
- BEM subcomponents (if any)
- Web Component equivalent (always recommend if available)
- Usage example in both CSS and Web Component form
