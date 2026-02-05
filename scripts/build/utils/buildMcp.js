import { execSync } from 'child_process';
import ora from 'ora';

const spinner = ora('[CHI]: Building MCP metadata').start();

try {
  execSync('npm run build:mcp', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
  spinner.succeed('[CHI]: MCP metadata built successfully');
  process.exit(0);
} catch (error) {
  spinner.fail('[CHI]: MCP metadata build failed');
  const errorMessage = error instanceof Error ? error.message : String(error);
  console.error(errorMessage);
  process.exit(1);
}
