# Welcome to Chi

Chi is Lumen's design system for building consistent digital products and experiences.

## Getting Started

Integrating Chi with your project is as simple as loading the Chi stylesheet from the [Lumen Assets Server](https://lib.lumen.com). Not only is this a great way to get started with Chi, it is also a highly available and performant option for loading the required assets into your project.

Begin by adding the Chi stylesheet to your project's layout template, replacing `VERSION` with the most recent release of Chi:

``` html
<link rel="stylesheet" href="https://lib.lumen.com/chi/VERSION/chi.css">
```

Next, add the `chi` CSS class to the `<html>` tag of your document to properly scope the styles. This allows Chi to override any existing styles that have been defined by legacy markup.

``` html
<!DOCTYPE html>

<html class="chi">
  ...
</html>
```

At this point you will be able to target the styles available in Chi by referencing its [documentation](https://lib.lumen.com/chi).

## Development Workflow

Set up your Chi development environment with npm and node 20. First make sure you have node installed, then run the command:

``` sh
$ npm install
$ npm link
```

Now your environment is set up. To start development run:

``` sh
$ chi start
```

Once the Chi project has started connect to one of the ports showed in console. While running, any changes in the style will automatically be reloaded in your browser.

## AI-Assisted Development (Cursor IDE)

Chi includes built-in **Cursor Skills and Rules** that give the AI assistant deep knowledge of the design system. When you open this project in Cursor, the AI automatically understands Chi conventions, validates your code, and suggests the right components and utilities.

### What's Included

**Rules** (always active -- applied automatically when editing matching files):

| Rule | What it does |
|------|-------------|
| `chi-design-system` | Global conventions: implementation priority, double-dash utility syntax, spacing system, themes |
| `chi-code-validation` | Anti-pattern detection, utility format validation, component schema checks, accessibility rules |
| `chi-migration` | CSS-to-Web Component mappings, modifier-to-property tables, migration examples |

**Skills** (invoked on demand when you ask the AI about specific topics):

| Skill | What it does |
|-------|-------------|
| `chi-components` | Component reference: names, modifiers, BEM structure, Web Component equivalents |
| `chi-tokens` | Design tokens: SCSS variables, values, categories, theme-specific tokens |
| `chi-utilities` | Utility classes: spacing, color, opacity, display, flexbox, typography, and more |
| `chi-component-schemas` | Validation schemas: allowed modifiers, conflicts, accessibility requirements |
| `chi-search` | Semantic search: synonym dictionary, use-case mappings for discoverability |
| `chi-recommendations` | Implementation approach decision tree: Vue vs Web Components vs HTML/CSS |

### How to Use

Once the project is open in Cursor, the rules activate automatically. For skills, just ask the AI naturally:

- *"What modifiers does chi-button support?"* -- triggers `chi-components`
- *"What's the spacing value for -p--4?"* -- triggers `chi-tokens` and `chi-utilities`
- *"Validate this HTML against Chi best practices"* -- triggers `chi-code-validation`
- *"Migrate this CSS button to a Web Component"* -- triggers `chi-migration`
- *"Should I use Vue components or Web Components for my React project?"* -- triggers `chi-recommendations`

See [.cursor/skills/README.md](.cursor/skills/README.md) for full documentation, installation options for external projects, and the complete directory structure.

### MCP Metadata Server

Chi also generates metadata for the **Chi MCP Server**, which provides the same intelligence to any MCP-compatible AI tool (not just Cursor). The metadata pipeline lives in `src/mcp/` and produces a comprehensive `metadata.json` with tokens, utilities, components, schemas, anti-patterns, and bundled skills.

| Command | What it does |
|---------|-------------|
| `npm run sync:skills` | Update Skills/Rules auto-generated sections from SCSS |
| `npm run build:mcp` | Generate `src/mcp/metadata.json` |
| `npm run build:mcp -- --force` | Force rebuild (bypass incremental cache) |

See [src/mcp/README.md](src/mcp/README.md) for the full architecture and build flow.

## Testing Changes

We use [BackstopJS](https://garris.github.io/BackstopJS) for visual regression testing of our CSS components. In order to account for differences in development environments we always run these tests in a consistent Docker container. To execute the test suite, run the following command:

``` sh
$ chi test
```

A report containing the results of the test will be created under `reports/html_report`. If there were failures, you will need to visually examine the changes and act appropriately based on the anticipated results.

If you receive a test failure and you've made changes that you know are correct, you will need to override the test references with your new changes by running the `approve` command on BackstopJS:

``` sh
$ chi approve
```

Once you have approved the changes, commit the new reference files with your changes.

## Production

Use the build command to make a ready-to-production build:

``` sh
$ chi build
```

## License

Chi and its documentation are released under the terms of the [MIT license](LICENSE).

In addition, Chi uses several 3rd-party libraries, a list of which can be viewed in the [package.json](package.json) file. Please review each of their license and user agreements, as well.

## Contribution Notice

By contributing to this Project, You grant to CenturyLink and to recipients of software distributed by CenturyLink, a perpetual worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, sublicense, and distribute your contributions to this Project ("Your Contributions"), including derivative works thereof.

You grant to CenturyLink and to recipients of software distributed by CenturyLink a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section), patent license to make, have made, use, offer to sell, sell, import and otherwise transfer Your Contributions, where such license applies only to those patent claims licensable by You that are necessarily infringed by Your Contributions(s) alone or by combination of Your Contribution(s) with this Project. If any entity institutes patent litigation against You or any other entity (including a cross-claim or counterclaim in a lawsuit) alleging that Your Contribution, or this Project, constitutes direct or contributory patent infringement, then any patent licenses granted to that entity under this agreement for Your Contribution or this Project shall terminate as of the date such litigation is filed.

You represent that each of Your Contributions is Your original creation and represent that You are legally entitled to grant the above license and that no other third party permission is required. If your employer(s) has rights to intellectual property that is included in Your Contributions, You represent that You have received permission to make such contributions on behalf of that employer.
