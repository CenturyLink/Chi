# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Chi (`@centurylink/chi`) is Lumen's design system: multi-theme CSS + vanilla-JS components, built with Sass and Vite. There is no framework runtime — output is plain `chi.css` + `chi.js` consumed via CDN, with companion packages for Web Components and Vue.

## Commands

```bash
npm install                 # Node 20+
npm run start               # static server (serve.cjs) + Vite dev together
npm run start:local         # Vite dev only (HMR), http://localhost:5173

npm run build               # full prod-style build, all themes → dist/
# faster local build (skips sibling-package copies that need them installed):
SKIP_BOILERPLATES=1 SKIP_CHI_DOCUMENTATION=1 SKIP_SRI=1 npm run build

# JS-only rebuild (seconds) — bundles src/chi/javascript/index.js:
npx cross-env JS=iife vite build --c vite-js.config.ts   # → dist/js/chi.js
npx cross-env JS=amd  vite build --c vite-js.config.ts   # → dist/amd/chi.js

npm run lint:scss                       # sass-lint (config: .sass-lint.yml)
npx sass-lint -v -q "src/path/file.scss"  # lint one file

npm run cy:open                         # Cypress interactive
npm run cy:run                          # Cypress headless (electron)
# single spec:
npx cypress run --config-file cypress.config.cjs --spec cypress/e2e/chi-js/icon.cy.js

npm run tests:visual                    # BackstopJS visual regression (Docker)
npm run tests:visual:approve            # accept new visual references

npm run generate:ai-rules               # sync .cursor rules/skills from SCSS
npm run build:mcp                       # regenerate src/mcp/metadata.json
```

`npm link` exposes a `chi` bin so the README's `chi start` / `chi build` / `chi test` are aliases for the npm scripts above.

There is **no JS linter/formatter configured** in the repo (only `sass-lint` for styles). An editor may auto-format JS on save.

## Architecture

**Two independent build pipelines from one source tree**, orchestrated by `scripts/build/build.sh`:

1. **CSS** — `scripts/build/css/build.js` loops the `THEMES_TO_BUILD` env list and invokes `vite-css.config.ts` once per theme (with the `THEME` env var set to that theme). `lumen` outputs `dist/chi.css`; every other theme outputs `dist/chi-<theme>.css`. PostCSS handles autoprefixing, SVG inlining, and cssnano. Theme sources live in `src/chi/themes/` — currently `brightspeed`, `centurylink`, `colt`, `connect`, `lumen`, `portal`, plus `test`; the default `npm run build` builds the `lumen,connect,centurylink,test` subset.
2. **JS** — `vite-js.config.ts` bundles `src/chi/javascript/index.js` into a single file twice: IIFE (`dist/js/chi.js`) and AMD (`dist/amd/chi.js`), both minified. Adding a component = create the module, then export it from `index.js`; no config change.

`build.sh` also copies prebuilt assets from sibling npm packages into `dist/`: `@centurylink/chi-documentation` (docs site), `@centurylink/chi-custom-elements` (Web Components, under `dist/js/ce`), `@centurylink/chi-vue`. It then builds boilerplates, test HTML, MCP metadata, and SRI hashes. The `SKIP_*` env vars short-circuit the slow/optional steps.

**Themes** — `src/chi/themes/<theme>/index.scss` is the per-theme entry that `@import`s every component, utility, and skeleton. Theme `_variables.scss` override `src/chi`'s global defaults via Sass import order.

**Vanilla-JS components** (`src/chi/javascript/`):
- `core/component.js` — `Component` base class. Subclasses define `componentType` + `componentSelector` and get a **cached factory** (`Component.factory.bind(Class)`): one instance per element, stored on the element via `chi.expando` (see `core/util.js` data registry).
- `core/util.js` — DOM/class helpers (`addClass`/`removeClass`/`hasClass`), measurement, the component registry. Prefer these over re-implementing.
- `index.js` — imports every component, re-exports `{Class, factory}` pairs, and attaches them all to `window.chi` (e.g. `chi.dropdown(el)`, `new chi.Dropdown(el)`).
- Most components require explicit init by the consumer (`chi.dropdown(el)`); the icon module is the exception — it self-initializes on load (scans `.chi-icon` + a `MutationObserver`) so HTML icons are enhanced without any author call.

**Icons** — Material Symbols Outlined webfont. HTML usage is class-based: `<i class="chi-icon icon-<name>">`, where `icon-mapping.scss` generates `::before { content: '<ligature>' }` for each mapped name (logos use `mask-image` instead). `icon-*` classes that aren't in the mapping render nothing. The `chi-icon` Web Component (in the chi-custom-elements sibling repo, not here) is the richer version; the HTML/CSS icons here are font + JS only.

**Tests** — Cypress JS specs (`cypress/e2e/chi-js/*.cy.js`) run against **built static HTML**, not src. Fixtures are Pug (`tests/js/*.pug`, extending `tests/layout.pug`) compiled by `scripts/build/utils/buildTests.js` into `dist/tests/<theme>/js/*.html` and served. `THEMES_TO_TEST` (from `scripts/tests/backstopConfig.sh`, default `lumen`) selects the theme. So: edit a `.pug` fixture → re-run `buildTests.js` → serve `dist` → run Cypress. Visual regression is BackstopJS in Docker.

**MCP / AI assets** — `src/mcp/` generates `metadata.json` (tokens, utilities, components, schemas) and the `.cursor/` rules & skills, derived from the SCSS sources. See `.github/copilot-instructions.md` and `src/mcp/README.md` for the rules/skills catalog and conventions (double-dash utility syntax, BEM, theming).

## Conventions

- **Commits & PRs** use `[DPEDE-XXXX] <Jira ticket title>` (the Jira project key), **not** Conventional Commits.
- Production consumers load `chi.css` from `https://lib.lumen.com/chi/<VERSION>/` and must put `class="chi"` on `<html>` to scope the styles.
- `dist/` is build output and git-ignored — never edit it by hand; rebuild instead.
