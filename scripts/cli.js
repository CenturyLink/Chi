#!/usr/bin/env node

import * as chi from './chi';
import yargs from 'yargs';

function getCommand(input) {
  if (input.length !== 1) {
    throw Error('Select one command');
  }

  const command = input[0];

  if (['all', 'css', 'assets'].indexOf(command) === -1) {
    throw Error('Invalid command');
  }

  return command;
}

const argv = yargs
  .usage('Usage: $0 command -c <component-list> -o <output-dir>')
  .example('$0 css -c grid buttons avatars -o dist/assets')
  .command('all', 'generates the stylesheet and copies the assets of the selected components')
  .command('css', 'generates the stylesheet with the selected components')
  .command('assets', 'copy the selected components assets')
  .options({
    'c': {
      alias: 'components',
      demandOption: false,
      default: 'all',
      describe: 'list of components',
      type: 'array'
    },
    'o': {
      alias: 'output',
      demandOption: true,
      describe: 'output folder',
      type: 'string'
    }
  })
  .argv;

try {
  switch (getCommand(argv._)) {
    case 'all':
      chi.buildCss({names: argv.c, dest: argv.o});
      chi.copyAssets({names: argv.c, dest: argv.o});
      break;
    case 'css':
      chi.buildCss({names: argv.c, dest: argv.o});
      break;
    case 'assets':
      chi.copyAssets({names: argv.c, dest: argv.o});
      break;
  }
} catch(e) {
  console.error(e);
  yargs.showHelp();
}
