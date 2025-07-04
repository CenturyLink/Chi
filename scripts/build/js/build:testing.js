import ora from 'ora';
import { execSync } from 'child_process';

async function buildTestingJS() {
  const spinnerTesting = ora(`[CHI]: Building JavaScript (testing)`).start();

  try {
    execSync(`cross-env JS=iife vite build --c vite-testing.config.ts`, { stdio: 'ignore' });
    spinnerTesting.succeed(`[CHI]: JavaScript (testing) build completed successfully`);
  } catch (error) {
    spinnerTesting.fail(`[CHI]: Error during JavaScript (testing) build: ${error.message}`);
    process.exit(1);
  } finally {
    spinnerTesting.stop();
  }
}

buildTestingJS();
