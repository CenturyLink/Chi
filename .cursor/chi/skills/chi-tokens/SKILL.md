---
name: chi-tokens
description: Extract and provide information about Chi Design System design tokens (colors, typography, spacing, shadows, breakpoints, z-index). Use when the user asks about design tokens, SCSS variables, theme colors, spacing values, or any design token query. Reads SCSS source files directly.
---

# Chi Design Tokens

## How to Extract Tokens

Design tokens are SCSS variables defined in source files. Read them directly.

### Global Tokens
Read `src/chi/_global-variables.scss` and parse lines matching: `$variable-name: value;`
Regex: `^\$([a-z0-9-_]+):\s*(.+?)\s*;`

**Note**: Some values are SCSS maps (e.g., `$shadow`, `$state-colors`). These contain multiple sub-values inside `(key: value, ...)` syntax.

### Theme-Specific Tokens
For theme colors, read `src/chi/themes/{theme}/_variables.scss` where theme is one of: `lumen`, `brightspeed`, `centurylink`, `colt`, `portal`, `connect`.

Theme files override global tokens. When a user asks about a color, check the theme file first, then fall back to global.

## Token Categorization

| Category | Name Pattern | Examples |
|----------|-------------|----------|
| **colors** | Contains `color`, `grey`, `red`, `blue`, etc. | `$color-background-primary` |
| **typography** | Starts with `font-`, `line-height`, `cap-height` | `$font-size-5` (1rem = 16px) |
| **spacing** | Is `base-unit` | `$base-unit` (8px) |
| **shadows** | Contains `shadow` | `$shadow` (map with levels 0-5) |
| **breakpoints** | Ends with `-breakpoint` | `$sm-breakpoint` (576px) |
| **zIndex** | Starts with `zindex-` | `$zindex-modal` (50) |
| **opacity** | Starts with `opacity-` | `$opacity-60` (0.6) |

## Key Values to Remember

- `$base-unit: 8px` -- spacing formula: `space(N) = (N/2)rem`, so each step = 8px at 16px root
- `$zindex-backdrop: 30`, `$zindex-modal: 50`, `$zindex-popover: 60`, `$zindex-tooltip: 70`
- Font sizes: `$font-size-5: 1rem` (16px, default body text)

## Workflow

When user asks about tokens:

1. **Specific token**: Look up in [reference.md](reference.md) first for description and examples. Read SCSS for the raw value.
2. **Category listing**: Filter reference.md by category, or read SCSS and filter by name pattern.
3. **Theme-specific**: Read the theme's `_variables.scss` for overridden values.
4. **Relationships**: Check reference.md "Token Relationships" section for related utilities and components.

## Response Format

When providing token information, include:
- Token name and SCSS variable (`$name`)
- Value (raw SCSS and computed px where applicable)
- Description and category
- Usage examples (SCSS and utility class equivalents)
- Related utilities or components
