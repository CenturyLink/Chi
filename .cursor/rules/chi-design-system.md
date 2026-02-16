---
description: Global Chi Design System conventions. Always active when working in this repository.
globs:
  - "**/*.{html,vue,tsx,jsx,scss,css,ts,js}"
---

# Chi Design System Conventions

## Implementation Priority

Always prefer these approaches in order:

1. **Chi Vue** (`<ChiButton>`) -- for Vue 3 projects
2. **Chi Web Components** (`<chi-button>`) -- for any framework (React, Angular, vanilla JS)
3. **Chi HTML/CSS** (`<button class="chi-button">`) -- only for legacy browsers or when explicitly requested

## Double-Dash Syntax (Critical)

All Chi utility classes use **double dash** (`--`) before values. This is the most common mistake.

| Correct | Incorrect |
|---------|-----------|
| `-p--4` | `-p-4` |
| `-bg--primary` | `-bg-primary` |
| `-opacity--60` | `-opacity-60` |
| `-d--flex` | `-d-flex` |
| `-text--bold` | `-text-bold` |

## Spacing System

Formula: `space(N) = (N / 2)rem`. At the default root font-size of 16px, each step = **8px**.

| Class | CSS Output | Pixels (16px root) |
|-------|------------|-------------------|
| `-p--0` | `0rem` | 0px |
| `-p--1` | `0.5rem` | 8px |
| `-p--2` | `1rem` | 16px |
| `-p--3` | `1.5rem` | 24px |
| `-p--4` | `2rem` | 32px |
| `-p--5` | `2.5rem` | 40px |
| `-p--6` | `3rem` | 48px |
| `-p--7` | `3.5rem` | 56px |
| `-p--8` | `4rem` | 64px |
| `-p--9` | `4.5rem` | 72px |
| `-p--10` | `5rem` | 80px |

Prefixes: `-p` (padding), `-m` (margin), `-g` (gap)
Directions: `-t` (top), `-r` (right), `-b` (bottom), `-l` (left), `-x` (horizontal), `-y` (vertical)
Responsive: `-p-sm--4` (padding 32px from `sm` breakpoint), `-m-lg--2` (margin 16px from `lg`)

Examples: `-pt--4` (padding-top 32px), `-mx--auto` (margin horizontal auto), `-g--3` (gap 24px)

## Themes

Chi supports 6 themes: `lumen`, `brightspeed`, `centurylink`, `colt`, `portal`, `connect`

## Key Rules

- NEVER use inline styles when a utility class exists
- NEVER use hardcoded colors -- use `-bg--*` and `-text--*` utilities
- ALWAYS use semantic color names: `-bg--success`, `-text--danger`, `-bg--warning`
- For gap spacing, use GLOBAL utilities `-g--X`, NOT component modifiers `-gap--X`
- Web Components handle accessibility automatically -- prefer them over CSS approach
- Boolean Web Component attributes: use `disabled` (not `disabled="true"`)
- Spacing values are rem-based: they scale with root font-size

## Source Files

- Global tokens: `src/chi/_global-variables.scss`
- Theme tokens: `src/chi/themes/{theme}/_variables.scss`
- Utilities: `src/chi/utilities/*.scss`
- Components: `src/chi/components/{name}/{name}.scss`
