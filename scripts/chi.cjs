#!/usr/bin/env node

const { execSync } = require('child_process');

const commands = {
  start: 'npm run serve',
  build: 'npm run build',
  test: 'npm run tests:visual',
  'test:e2e': 'npm run tests:e2e',
  approve: 'npm run tests:visual:approve',
  release: 'bash ./scripts/release.sh',
};

const args = process.argv.slice(2);
const command = args[0];

if (commands[command]) {
  try {
    const commandToExecute = command === 'release' 
      ? `${commands[command]} ${args.slice(1).join(' ')}` 
      : commands[command];

    execSync(commandToExecute, { stdio: 'inherit' });

    if (command === 'release') {
      execSync('npm run build', { stdio: 'inherit' });
    }
  } catch (error) {
    process.exit(1);
  }
}