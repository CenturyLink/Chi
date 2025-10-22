#!/usr/bin/env node

const { execFileSync } = require('child_process');

const commands = {
  start: ['npm', ['run', 'serve']],
  build: ['npm', ['run', 'build']],
  test: ['npm', ['run', 'tests:visual']],
  'test:e2e': ['npm', ['run', 'tests:e2e']],
  approve: ['npm', ['run', 'tests:visual:approve']],
  release: ['bash', ['./scripts/release.sh']],
};

const args = process.argv.slice(2);
const command = args[0];

if (commands[command]) {
  try {
    if (command === 'release') {
      const additionalArgs = args.slice(1);
      
      execFileSync(commands.release[0], [...commands.release[1], ...additionalArgs], { stdio: 'inherit' });
      execFileSync('npm', ['run', 'build'], { stdio: 'inherit' });
    } else {
      const [cmd, cmdArgs] = commands[command];
      
      execFileSync(cmd, cmdArgs, { stdio: 'inherit' });
    }
  } catch (error) {
    console.error(`[CHI]: ${error.message}`);
    process.exit(1);
  }
} else {
  console.error(`[CHI]: Unknown command "${command}"`);
  process.exit(1);
}
