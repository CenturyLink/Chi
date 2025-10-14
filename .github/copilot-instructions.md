# Chi Design System - AI Coding Agent Instructions

Chi is Lumen's design system providing consistent UI components and experiences. It's a multi-theme design system built with Sass, Vite, and vanilla JavaScript.

## Architecture Overview

### Core Structure
- **`src/chi/`**: Main design system source code
  - `themes/`: Brand-specific themes (lumen, brightspeed, centurylink, colt, portal)
  - `components/`: Individual UI components with SCSS and JS
  - `javascript/`: Vanilla JS component implementations
  - `utilities/`: CSS utility classes
  - `foundations/`: Base styles (reset, typography)

### Theme System
Each theme in `src/chi/themes/` has its own `index.scss` that imports all components. The build system uses `THEME` environment variable to build theme-specific CSS. Default is `lumen` theme which outputs as `chi.css`, others as `chi-{theme}.css`.

### Multi-Package Dependencies
Chi integrates with companion packages:
- `@centurylink/chi-documentation`: Documentation site assets
- `@centurylink/chi-custom-elements`: Web Components version
- `@centurylink/chi-vue`: Vue.js wrapper components

## Key Development Workflows

### CLI Commands (via `chi` script)
```bash
chi start    # Runs development server (npm run serve + vite dev)
chi build    # Full production build with all assets
chi test     # Visual regression tests with BackstopJS in Docker
chi approve  # Approve visual test changes (updates reference images)
```

### Build Process
- Uses Vite with custom configs: `vite-css.config.ts` for CSS builds, `vite-js.config.ts` for JS
- CSS builds per theme with PostCSS processing (autoprefixer, SVG inlining, cssnano)
- Build script copies assets from dependency packages into `dist/`
- SRI hashes generated for security unless `SKIP_SRI=true`

### Testing Strategy
- **Visual Regression**: BackstopJS with Playwright in Docker containers
- **E2E Testing**: Cypress for component interactions
- Tests run against built static assets served via Express

## Component Conventions

### SCSS Architecture
- Components use BEM methodology with `-chi-` prefix
- Global variables in `_global-variables.scss` (font sizes, shadows, base units)
- Theme-specific variables override globals per brand
- Mixins in `_global-mixins.scss` for reusable patterns

### JavaScript Components
- Factory pattern: each component exports both Class and factory function
- Components auto-initialize on DOM elements with data attributes
- Global `window.chi` object for runtime component access
- Example: `chi.dropdown(element)` or `new chi.Dropdown(element)`

### File Organization Pattern
Each component typically has:
```
components/button/
  button.scss       # Component styles
  _variables.scss   # Component-specific variables (if needed)
```

## Integration & Dependencies

### Asset Loading
Production usage via CDN: `https://lib.lumen.com/chi/VERSION/chi.css`
Requires `chi` class on `<html>` element for proper scoping.

### Icon System
- Custom icon font with `chi` font-family
- SVG sprites built from `src/chi/assets/icons/`
- PostCSS plugin inlines SVGs in CSS

### Documentation Site
Built documentation lives in separate `@centurylink/chi-documentation` package but gets copied into Chi's `dist/` during build for unified distribution.

## Development Environment

### Prerequisites
- Node 20+ with npm
- Docker (for visual tests)

### Local Development
```bash
npm install && npm link
chi start  # Starts both static server and Vite dev server
```

The dual server setup serves built assets (for testing) while Vite provides HMR for development.

## Common Patterns

### Adding New Components
1. Create component directory in `src/chi/components/`
2. Add SCSS file following BEM conventions
3. Import component in each theme's `index.scss`
4. Add JavaScript class if interactive (follow factory pattern)
5. Export from `src/chi/javascript/index.js`

### Theme Customization
Override variables in theme-specific `_variables.scss` files. The Sass import order ensures theme variables override global defaults.

### Build Optimization
Set `SKIP_BOILERPLATES=true` or `SKIP_SRI=true` for faster development builds when these aren't needed.