import { execSync } from 'child_process';
import ora from 'ora';

function run(label, command) {
  const spinner = ora(label).start();
  const doneText = label.replace(/\.\.\.$/, '');

  try {
    execSync(command, { stdio: 'pipe', cwd: process.cwd() });
    spinner.succeed(doneText);
  } catch (error) {
    spinner.fail(doneText);
    
    const stderr = error.stderr ? error.stderr.toString().trim() : '';
    const stdout = error.stdout ? error.stdout.toString().trim() : '';

    if (stderr) console.error(stderr);
    else if (stdout) console.error(stdout);

    process.exit(1);
  }
}

run('[CHI]: Syncing skills from SCSS sources...', 'npm run sync:skills');
run('[CHI]: Building MCP metadata...', 'npm run build:mcp');
