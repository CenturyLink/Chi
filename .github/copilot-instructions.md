# Chi Design System - AI Agent Instructions

## Architecture Overview

Chi is Lumen's design system that follows a **multi-theme architecture** built with Sass/SCSS and vanilla JavaScript. The system provides CSS frameworks and JavaScript components for multiple brands (Lumen, CenturyLink, BrightSpeed, Colt, Portal).

### Key Architectural Patterns

- **Theme-based CSS compilation**: Each theme in `src/chi/themes/` builds a separate CSS file (e.g., `chi.css` for Lumen, `chi-brightspeed.css` for BrightSpeed)
- **Component inheritance**: JavaScript components extend base `Component` class from `src/chi/javascript/core/component.js`
- **Factory pattern**: All JS components use cached factory methods for initialization (see `Component.factory()`)
- **CSS scoping**: All styles are scoped under `.chi` class for safe integration

## Development Workflow

### Essential Commands (via `chi` CLI)
```bash
chi start     # Starts dev server + build watcher (port shown in console)
chi build     # Production build (CSS + JS + assets + documentation)
chi test      # Visual regression tests with BackstopJS in Docker
chi approve   # Approve visual test changes (updates reference images)
```

### Build System Architecture
- **Vite configs**: `vite-css.config.ts` (themes), `vite-js.config.ts` (components), `vite.config.ts` (dev server)
- **Multi-format JS output**: Both IIFE (`dist/js/chi.js`) and AMD (`dist/amd/chi.js`) builds
- **Theme compilation**: Environment variable `THEME=brightspeed` controls which theme builds
- **Asset pipeline**: Icons → SVG sprites, fonts, images copied to `dist/assets/`

## Component Development Patterns

### JavaScript Components
```javascript
// Standard component pattern (see src/chi/javascript/components/*)
class MyComponent extends Component {
  static get componentType() { return 'myComponent'; }
  static get componentSelector() { return '[data-my-component]'; }
  
  constructor(elem, config) {
    super(elem, config);
    this._init();
  }
  
  _init() {
    // Use this._addEventHandler() for cleanup-tracked listeners
  }
}

// Factory export pattern
export { MyComponent, MyComponent.factory as myComponent };
```

### SCSS Component Structure
```scss
// Components follow this import pattern in theme index files:
@import '../../components/my-component/my-component';

// Component files use theme variables via:
// - Global: $base-unit, $font-size-*, $state-colors
// - Theme-specific: Defined in each theme's _variables.scss
```

## Testing & Quality

### Visual Regression Testing with BackstopJS
- **BackstopJS** with Docker for consistency across environments
- **Configuration files**: `backstop-responsive.json` (mobile/tablet viewports), `backstop-non-responsive.json` (desktop viewport)
- **Reference images**: Stored in `backstop_data/bitmaps_reference/{responsive|non_responsive}/`
- **Test results**: Reports generated in `reports/html_report/`

#### Creating New Visual Tests
```bash
# 1. Create test file in tests/components/
# Example: tests/components/my-component.pug
extends ../layout.pug

block variables
  - var title = 'My Component'

block content
  h3 Base
  .test-my-component-base.-w--100
    .chi-my-component
      | Component content here

# 2. Add test selectors with .test-* classes for targeting
# 3. Register in tests.json
{ "name": "My Component", "href": "components/my-component.html" }

# 4. Add scenario to backstop config files
{
  "label": "my-component",
  "url": "http://localhost:8000/chi/VERSION/tests/components/my-component.html",
  "selectors": [
    ".test-my-component-base",
    ".test-my-component-variants"
  ],
  "misMatchThreshold": 0,
  "requireSameDimensions": true
}
```

#### BackstopJS Configuration Structure
- **Scenarios**: Each component test with URL, selectors, and options
- **Selectors**: Target `.test-*` classes for consistent testing areas
- **Viewports**: Responsive tests across multiple device sizes
- **Scripts**: `playwright/onBefore.cjs` and `playwright/onReady.cjs` for setup
- **File naming**: `{scenarioLabel}_{selectorLabel}_{viewportLabel}`

#### Visual Test Workflow
```bash
# 1. Run tests to detect changes
chi test

# 2. Review failures in reports/html_report/index.html
# 3. If changes are intentional, approve new references
chi approve

# 4. Commit new reference images
git add backstop_data/bitmaps_reference/
git commit -m "Update visual test references for [component]"
```

#### Critical Testing Patterns
- **Selector naming**: Use `.test-component-variant` for BackstopJS targeting
- **Test isolation**: Each test section should be self-contained
- **State testing**: Include different component states (active, disabled, etc.)
- **Responsive coverage**: Test responsive components in both config files
- **Threshold tuning**: Adjust `misMatchThreshold` for components with acceptable variance

### End-to-End Testing
- **Cypress** configured for component interaction testing
- **Base URL pattern**: `http://localhost:8000/chi/{version}/` (see `cypress.config.cjs`)
- **Isolation disabled**: `testIsolation: false` for cross-test state sharing

## Integration Patterns

### CSS Integration
```html
<!-- Standard integration pattern -->
<html class="chi">
  <head>
    <link rel="stylesheet" href="https://lib.lumen.com/chi/VERSION/chi.css">
  </head>
  <body><!-- Components work within .chi scope --></body>
</html>
```

### JavaScript Integration
```javascript
// Global access pattern
window.chi.accordion('[data-accordion]');

// Module import pattern  
import { accordion, Accordion } from '@centurylink/chi';
```

### Framework Boilerplates
- **React**: `src/boilerplates/react/` - CRA-based integration example
- **Angular**: `src/boilerplates/angular/` - Angular CLI integration
- **Vue**: Separate `@centurylink/chi-vue` package dependency
- **Custom Elements**: Separate `@centurylink/chi-custom-elements` package

## Critical File Patterns

### Theme Development
- **Entry point**: `src/chi/themes/{theme}/index.scss` imports all components
- **Theme variables**: `src/chi/themes/{theme}/_variables.scss` override global defaults
- **Global mixins**: `src/chi/_global-mixins.scss` provide cross-theme utilities

### Documentation Integration
- **Chi Documentation**: External `@centurylink/chi-documentation` package provides docs site
- **Build integration**: Documentation assets copied to `dist/` during build process
- **Component docs**: JSON metadata in `dist/docs.json` for documentation rendering

### CI/CD Considerations
- **Jenkins pipeline**: `cicd/jenkins/Jenkinsfile` handles multi-environment deployment
- **Docker**: Visual tests require Docker for environment consistency
- **Versioning**: Package version determines asset URLs and documentation paths
- **SRI**: Subresource Integrity hashes generated for all assets (`sri.json`)

## Release Process

### Version Management
- **Release command**: `chi release <new-version>` - Updates version across all files automatically
- **Version replacement**: Uses `scripts/release.sh` to find/replace current version with new version in all relevant files
- **Post-release**: Triggers Algolia reindexing via `scripts/reindexAlgolia.sh` for documentation search

### Deployment Pipeline
- **Jenkins-based**: `cicd/jenkins/Jenkinsfile` handles the full CI/CD pipeline
- **Asset Server**: Production builds are pushed to `ux-chi-AssetsServer` repository for CDN distribution
- **Deployment tags**: Special `##DEPLOYMENT##` tags trigger production releases
- **GitHub releases**: Automatic GitHub release creation with changelog extraction from `CHANGELOG.md`

### Release Workflow
```bash
# 1. Create and switch to release branch
git checkout -b release/6.62.0

# 2. Version bump and file updates
chi release 6.62.0

# 3. Stage all changes
git add .

# 4. Commit changes with proper message format
git commit -m "[DPEDE-n] Release 6.62.0"

# 5. Push branch to origin (creates upstream if doesn't exist)
git push -u origin release/6.62.0
# Or if branch already exists upstream:
# git push origin release/6.62.0

# 6. Create Pull Request and merge to master
# After merge, tag the release on master:
git checkout master
git pull origin master
```

### Distribution Channels
- **CDN**: Available at `https://lib.lumen.com/chi/VERSION/chi.css`
- **Asset Server**: Static files served from CenturyLink's infrastructure
- **Documentation**: Deployed to `lib.lumen.com/chi` with Algolia search indexing

## Common Gotchas

1. **Theme compilation**: Must set `THEME` environment variable for non-Lumen builds
2. **Component initialization**: Use `Component.initAll()` for auto-discovery, factories for manual init
3. **Event cleanup**: Components automatically clean event handlers on destruction via `_addEventHandler()`
4. **CSS specificity**: Chi styles are scoped, but may need `!important` for legacy override scenarios
5. **Visual tests**: Differences in font rendering/browser versions can cause false failures - always verify visually
