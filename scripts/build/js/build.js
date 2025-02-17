import ora from 'ora';
import { execSync } from 'child_process';

async function buildJS() {
  const spinnerIIFE = ora(`[CHI]: Building JavaScript (IIFE)`).start();

  try {
    execSync(`cross-env JS=iife vite build --c vite-js.config.ts`, { stdio: 'ignore' });
    spinnerIIFE.succeed(`[CHI]: JavaScript (IIFE) build completed successfully`);
  } catch (error) {
    spinnerIIFE.fail(`[CHI]: Error during JavaScript (IIFE) build: ${error.message}`);
    process.exit(1);
  } finally {
    spinnerIIFE.stop();
  }

  const spinnerAMD = ora(`[CHI]: Building JavaScript (AMD)`).start();

  try {
    execSync(`cross-env JS=amd vite build --c vite-js.config.ts`, { stdio: 'ignore' });
    spinnerAMD.succeed(`[CHI]: JavaScript (AMD) build completed successfully`);
  } catch (error) {
    spinnerAMD.fail(`[CHI]: Error during JavaScript (AMD) build: ${error.message}`);
    process.exit(1);
  } finally {
    spinnerAMD.stop();
  }
}

buildJS();
