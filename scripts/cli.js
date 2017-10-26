#!/usr/bin/env node

import * as chi from './chi';
import yargs from 'yargs';

const argv = yargs
  .usage('Usage: $0 <component-list> -c command -o <output-dir> -p <assets_path>')
  .example('$0 grid buttons avatars -o dist/assets -p /assets/')
  .command('all', 'generates the stylesheet and copies the assets of the selected components')
  .command('css', 'generates the stylesheet with the selected components')
  .command('assets', 'copy the selected components assets')
  .options({
    'c': {
      alias: 'command',
      demandOption: false,
      default: 'all',
      describe: 'command',
      choices: ['all', 'css', 'assets']
    },
    'o': {
      alias: 'output',
      demandOption: true,
      describe: 'output folder',
      type: 'string'
    },
    'p': {
      alias: 'path',
      demandOption: false,
      default: '/',
      describe: 'assets path',
      type: 'string'
    }
  })
  .argv;

try {
  switch (argv.c) {
    case 'all':
      chi.buildCss({names: argv._, dest: argv.o, assetsPath: argv.p});
      chi.copyAssets({names: argv._, dest: argv.o});
      break;
    case 'css':
      chi.buildCss({names: argv._, dest: argv.o, assetsPath: argv.p});
      break;
    case 'assets':
      chi.copyAssets({names: argv._, dest: argv.o});
      break;
  }
} catch(e) {
  console.error(e);
  yargs.showHelp();
}
