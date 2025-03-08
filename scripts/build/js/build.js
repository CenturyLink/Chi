import ora from 'ora';
import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

const __dirname = path.resolve();
const isWindows = process.platform === 'win32';

async function buildJS() {
  const spinnerIIFE = ora(`[CHI]: Building JavaScript (IIFE)`).start();

  try {
    deleteJsFiles();
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

const deleteJsFiles = () => {
  const files = [
    { name: 'chi.js', path: path.resolve(__dirname, 'dist/js', 'chi.js') },
    { name: 'index.umd.js', path: path.resolve(__dirname, 'dist/chi-vue/umd', 'index.umd.js') }
  ];

  files.forEach(file => {
    if (existsSync(file.path)) {
      try {
        execSync(isWindows ? `del /f ${file.path}` : `rm -f ${file.path}`);
      } catch (error) {
        console.error(`[CHI]: Error deleting ${file.name}: ${error.message}`);
      }
    } else {
      console.warn(`[CHI]: ${file.name} does not exist.`);
    }
  });
};

buildJS();
