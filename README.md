# Welcome to Chi

Chi is a CenturyLink CSS pattern library for building fast, reusable, and consistent responsive interfaces.

# Using Chi

First import Chi into your project

``` sh
npm i @ctl/chi --save-dev
```

Once Chi is installed as a dependency there are two different options to use it:
 - Through it's CLI
 - Through it's API

Once the css is generated just include it into your html page or script bundle.

## CLI

The CLI is installed in `node_modules/.bin/` folder as `chi`.

`chi` command allows you to create a css that contains just the foundations of Chi and the components you use in your project. Also it helps you to copy all Chi assets used by those selected components into the assets folder used by your web app.

``` sh
vader:example luke$ ./node_modules/.bin/chi buttons grid -c css -o dist
```

In the example chi compiles the foundations, buttons and grid into a minified css and place it inside the dist folder.

All `chi` options can be checked invoking the help.

``` sh
vader:example luke$ ./node_modules/.bin/chi --help
Usage: bin/cli.js <component-list> -c command -o <output-dir> -p <assets_path>

Commands:
  all     generates the stylesheet and copies the assets of the selected
          components
  css     generates the stylesheet with the selected components
  assets  copy the selected components assets

Options:
  --help         Show help                                             [boolean]
  --version      Show version number                                   [boolean]
  -c, --command  command      [choices: "all", "css", "assets"] [default: "all"]
  -o, --output   output folder                               [string] [required]
  -p, --path     assets path                             [string] [default: "/"]

Examples:
  bin/cli.js grid buttons avatars -o dist/assets -p /assets/
```

## API

To use the API just require `chi` in your javascript file.

``` js
var chi = require('@ctl/chi');
```

`chi` provides three methods:

 - build(options): Generates the css and copies the assets into the dest folder.
 - buildCss(options): Generates the css with the specified components and the foundations and moves it into the dest folder.
 - copyAssets(options): Copies the assets used by the selected components into the dest folder.

 #### options

Options are common for both methods.

| option     | Description                                                            |
|------------|------------------------------------------------------------------------|
| names      | List of components to include. Omit the option to include all of them. |
| dest       | dest folder in which the result is going to ve copied.                 |
| assetsPath | root path where the assets are located.                                |

# Development

The preferred way to setup your dev env is through docker. If you have docker installed then run the command

``` sh
vader:example luke$ npm run docker -- start
```

And connect to `http://localhost:8000` to start developing in chi and see your changes in the browser.

However, if you don't have docker installed and don't plan to install, follow the normal process for all npm projects.

``` sh
vader:example luke$ npm install
vader:example luke$ npm start
```

## test

We are using backstopJS to unit test our css components. In order to execute the unit test run the command

``` sh
vader:example luke$ npm run docker -- test
```
or
``` sh
vader:example luke$ npm test
```

Test report is created under `reports/html_report` and you can browse the results with your browser.

In the event you receive a test failure after adding a new test or making a change and your changes are correct, you will need to override the baseline test with your new changes by running an approve.


``` sh
vader:example luke$ npm run docker -- approve
```
or
``` sh
vader:example luke$ npm run approve
```
