# Chi Utilities Reference Data

## Generated Spacing Utilities

Formula: `space(N) = (N / 2)rem`. At 16px root font-size, each step = **8px**.
Generated from 3 types × 7 positions × 11 values = ~231 classes (+ responsive variants per breakpoint).

### Types
- `p` = padding
- `m` = margin
- `g` = gap (only supports: all, x, y positions)

### Positions
- (none) = all sides
- `t` = top
- `r` = right
- `b` = bottom
- `l` = left
- `x` = horizontal (left + right)
- `y` = vertical (top + bottom)

### Values
| Value | CSS Output | Pixels (16px root) |
|-------|------------|-------------------|
| 0 | `0` | 0px |
| 1 | `0.5rem` | 8px |
| 2 | `1rem` | 16px |
| 3 | `1.5rem` | 24px |
| 4 | `2rem` | 32px |
| 5 | `2.5rem` | 40px |
| 6 | `3rem` | 48px |
| 7 | `3.5rem` | 56px |
| 8 | `4rem` | 64px |
| 9 | `4.5rem` | 72px |
| 10 | `5rem` | 80px |
| auto | `auto` | auto (margin only) |

### Pattern
`-{type}{position}--{value}`

Examples: `-p--4` (padding 2rem / 32px), `-mt--2` (margin-top 1rem / 16px), `-gx--3` (column-gap 1.5rem / 24px), `-mx--auto` (margin horizontal auto)

### Responsive Variants
All spacing utilities support breakpoint infixes: `-{type}{position}-{breakpoint}--{value}`
Breakpoints: `sm` (576px), `md` (768px), `lg` (992px), `xl` (1200px), `xxl` (1600px)
Examples: `-p-sm--4` (padding 32px from sm), `-m-lg--2` (margin 16px from lg)

## Generated Color Utilities

### Background Colors (`-bg--*`)
Available colors: primary, secondary, white, black, navy, grey, grey-10, grey-15, grey-20, grey-25, grey-30, muted, muted-light, muted-lighter, success, success-light, success-lighter, info, info-light, info-lighter, warning, warning-light, warning-lighter, danger, danger-light, danger-lighter, none

### Text Colors (`-text--*`)
Same color names as background, prefixed with `-text--` instead of `-bg--`.

## Generated Opacity Utilities

| Class | CSS Value |
|-------|-----------|
| `-opacity--0` | opacity: 0 |
| `-opacity--20` | opacity: 0.2 |
| `-opacity--40` | opacity: 0.4 |
| `-opacity--60` | opacity: 0.6 |
| `-opacity--80` | opacity: 0.8 |
| `-opacity--100` | opacity: 1 |

## Static Utility Categories

### Display
| Class | CSS |
|-------|-----|
| `-d--none` | display: none |
| `-d--block` | display: block |
| `-d--inline` | display: inline |
| `-d--inline-block` | display: inline-block |
| `-d--flex` | display: flex |
| `-d--inline-flex` | display: inline-flex |

Note: Responsive variants supported: `-d-{breakpoint}--{value}` (e.g., `-d-sm--none`, `-d-lg--flex`)

### Flexbox
| Class | CSS |
|-------|-----|
| `-flex--row` | flex-direction: row |
| `-flex--column` | flex-direction: column |
| `-flex--row-reverse` | flex-direction: row-reverse |
| `-flex--column-reverse` | flex-direction: column-reverse |
| `-justify-content--start` | justify-content: flex-start |
| `-justify-content--end` | justify-content: flex-end |
| `-justify-content--center` | justify-content: center |
| `-justify-content--between` | justify-content: space-between |
| `-justify-content--around` | justify-content: space-around |
| `-align-items--start` | align-items: flex-start |
| `-align-items--end` | align-items: flex-end |
| `-align-items--center` | align-items: center |
| `-align-items--stretch` | align-items: stretch |
| `-align-items--baseline` | align-items: baseline |
| `-flex--wrap` | flex-wrap: wrap |
| `-flex--nowrap` | flex-wrap: nowrap |
| `-flex--grow1` | flex-grow: 1 |
| `-flex--shrink0` | flex-shrink: 0 |

### Typography
| Class | CSS |
|-------|-----|
| `-text--bold` | font-weight: 700 |
| `-text--normal` | font-weight: 400 |
| `-text--light` | font-weight: 300 |
| `-text--center` | text-align: center |
| `-text--left` | text-align: left |
| `-text--right` | text-align: right |
| `-text--uppercase` | text-transform: uppercase |
| `-text--lowercase` | text-transform: lowercase |
| `-text--capitalize` | text-transform: capitalize |
| `-text--truncate` | text-overflow: ellipsis; overflow: hidden; white-space: nowrap |
| `-text--nowrap` | white-space: nowrap |

### Sizing
| Class | CSS |
|-------|-----|
| `-w--0` | width: 0 |
| `-w--25` | width: 25% |
| `-w--50` | width: 50% |
| `-w--75` | width: 75% |
| `-w--100` | width: 100% |
| `-w--auto` | width: auto |
| `-h--0` | height: 0 |
| `-h--25` | height: 25% |
| `-h--50` | height: 50% |
| `-h--75` | height: 75% |
| `-h--100` | height: 100% |
| `-h--auto` | height: auto |

### Border
| Class | CSS |
|-------|-----|
| `-b--0` | border: 0 |
| `-b--1` | border-width: 1px |
| `-bt--0` | border-top: 0 |
| `-br--0` | border-right: 0 |
| `-bb--0` | border-bottom: 0 |
| `-bl--0` | border-left: 0 |
| `-circle` | border-radius: 50% |
| `-raindrop` | border-radius: raindrop shape |

Note: Chi uses `-b--{value}` for border utilities, not `-border--`. `-rounded--N` classes do not exist in Chi; use `-circle` or `-raindrop` for border-radius.

### Position
| Class | CSS |
|-------|-----|
| `-position--static` | position: static |
| `-position--relative` | position: relative |
| `-position--absolute` | position: absolute |
| `-position--fixed` | position: fixed |
| `-position--sticky` | position: sticky |

### Shadow
| Class | CSS |
|-------|-----|
| `-shadow--1` | box-shadow: (level 1 elevation) |
| `-shadow--2` | box-shadow: (level 2 elevation) |
| `-shadow--3` | box-shadow: (level 3 elevation) |
| `-shadow--4` | box-shadow: (level 4 elevation) |
| `-shadow--5` | box-shadow: (level 5 elevation) |

### Focus
| Class | CSS |
|-------|-----|
| `-mouse-control` | Disables focus-visible outlines for mouse users |

### Image
| Class | CSS |
|-------|-----|
| `-img--responsive` | max-width: 100%; height: auto |

## Utility Relationships

| Utility | Related Utilities | Common Components | Notes |
|---------|-------------------|-------------------|-------|
| `-p--4` | -m--4, -g--4, -pt--4, -px--4, -py--4 | chi-button, chi-card | Part of spacing scale (2rem / 32px) |
| `-m--4` | -p--4, -g--4, -mt--4, -mx--4, -my--4 | | Part of spacing scale (2rem / 32px) |
| `-mx--auto` | -m--auto, -my--auto, -d--block | chi-container, chi-card | Horizontal centering |
| `-bg--primary` | -text--white, -bg--secondary, -text--primary | chi-button, chi-alert | Primary brand color. Pair with -text--white |
| `-bg--danger` | -text--danger, -bg--danger-light, -bg--danger-lighter | chi-alert | Danger/error state |
| `-d--flex` | -flex--row, -flex--column, -justify-content--center, -align-items--center, -g--3 | | Flexbox container |
| `-opacity--60` | -opacity--0, -opacity--100, -opacity--40, -opacity--80 | | Medium transparency (60%) |
| `-circle` | -b--0, -b--1 | chi-card, chi-badge, chi-button | Circular border radius |

## Category Descriptions

| Category | Description |
|----------|-------------|
| Spacing | Padding, margin, and gap utilities. Formula: space(N) = (N/2)rem, each step = 8px at 16px root |
| Display | Show/hide and display mode utilities |
| Flexbox | Flex container and item utilities |
| Color | Background and text color utilities |
| Typography | Font weight, alignment, and text transform |
| Sizing | Width and height percentage utilities |
| Border | Border radius and border width utilities |
| Position | CSS position utilities |
| Shadow | Box shadow elevation utilities |
| Opacity | Transparency utilities |
| Focus | Focus visibility management for mouse/keyboard users |
| Image | Responsive image utilities |
