import { exec } from 'child_process';
import ora from 'ora';

(async () => {
  const spinner = ora('[CHI]: Running E2E tests').start();

  try {
    await runCypress(spinner);
    spinner.succeed('[CHI]: E2E tests completed successfully');
  } catch (error) {
    spinner.fail('[CHI]: Error executing Cypress tests:');
    console.error(error);
    process.exit(1);
  }
})();

function runCypress(spinner) {
  return new Promise((resolve, reject) => {    
    exec(`npm run cy:run`, (error, stdout, stderr) => {
      if (error) {
        spinner.fail(`[CHI]: E2E tests failed`);
        return reject(error);
      }

      resolve();
    });
  });
}