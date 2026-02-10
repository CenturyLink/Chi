---
name: chi-utilities
description: Extract and provide information about Chi utility classes (spacing, color, opacity, display, flex, border, typography, sizing, position, shadow). Use when the user asks about utility classes, CSS helpers, spacing, colors, or layout utilities. Reads SCSS source files directly.
---

# Chi Utility Classes

## Critical Rule: Double-Dash Syntax

All Chi utility classes use **double dash** (`--`) before values. This is the #1 most common mistake.

| Correct | Incorrect |
|---------|-----------|
| `-p--4` | `-p-4` |
| `-bg--primary` | `-bg-primary` |
| `-d--flex` | `-d-flex` |

If a user writes single-dash, **always correct it**.

## How to Extract Utilities

Utility classes are defined in `src/chi/utilities/`. Two types:

### Generated Utilities (from SCSS loops)
Spacing, color, and opacity utilities are generated programmatically from SCSS maps. The complete lists are in [reference.md](reference.md).

### Static Utilities (from SCSS files)
Display, flex, typography, border, sizing, position, and shadow utilities are defined as static classes.
Regex: `/\.-([a-z0-9-_]+)\s*\{([^}]+)\}/gi`

## Spacing System

Formula: `space(N) = (N / 2)rem`. At 16px root font-size, each step = **8px**.

| Class | CSS | Pixels |
|-------|-----|--------|
| `-p--1` | `0.5rem` | 8px |
| `-p--2` | `1rem` | 16px |
| `-p--4` | `2rem` | 32px |

Prefixes: `-p` (padding), `-m` (margin), `-g` (gap)
Directions: `-t`, `-r`, `-b`, `-l`, `-x`, `-y`
Range: 0-10, plus `auto` for margin

### Responsive Variants
All spacing utilities support breakpoint infixes: `-p-sm--4`, `-m-lg--2`, `-d-xl--flex`
Breakpoints: `sm` (576px), `md` (768px), `lg` (992px), `xl` (1200px), `xxl` (1600px)

## Utility Categories

| Category | SCSS File | Type | Example |
|----------|-----------|------|---------|
| Spacing | `spacing.scss` | Generated | `-p--4`, `-mx--auto` |
| Color | `color.scss` | Generated | `-bg--primary`, `-text--danger` |
| Opacity | `opacity.scss` | Generated | `-opacity--60` |
| Display | `display.scss` | Static | `-d--flex`, `-d--none` |
| Flexbox | `flex.scss` | Static | `-justify-content--center` |
| Typography | `text.scss` | Static | `-text--bold`, `-text--h1` |
| Border | `border.scss` | Static | `-b--1`, `-circle`, `-raindrop` |
| Sizing | `sizing.scss` | Static | `-w--100`, `-h--50` |
| Position | `position.scss` | Static | `-position--relative` |
| Shadow | `shadow.scss` | Static | `-shadow--2` |
| Focus | `focus-visibility.scss` | Static | `-mouse-control` |
| Image | `image.scss` | Static | `-img--responsive` |

## Workflow

When user asks about utilities:

1. **Specific utility**: Look up in [reference.md](reference.md) for class name, CSS properties, and examples
2. **Category listing**: Return all utilities in that category from reference.md
3. **"How do I..."**: Map the intent to the right utility (e.g., "center a div" → `-mx--auto` or `-d--flex -justify-content--center`)
4. **Validation**: Always verify double-dash syntax

## Response Format

When providing utility information, include:
- Class name (with leading dash)
- CSS properties it sets
- Pixel value (for spacing)
- Usage example with `<chi-*>` or `<div>`
- Note responsive variants if applicable
