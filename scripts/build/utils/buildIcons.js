import { execSync } from 'child_process';
import ora from 'ora';

const jsDist = 'dist';
const svgFolder = 'dist/svg';
const marketingIconsFolder = 'src/chi/components/marketing-icon';

const copyRight = "/* Chi and its documentation are released under the terms of the MIT license. In addition, Chi uses several 3rd-party libraries, a list of which can be viewed in the package.json file. Please review each of their license and user agreements, as well. */";


function runBashScript(scriptPath, spinner, message = null) {
  try {
    execSync(scriptPath, { stdio: 'ignore' });
    spinner.succeed(`[CHI]: ${message} completed successfully`);
  } catch (error) {
    spinner.fail(`[CHI]: Error executing ${scriptPath}: ${error.message}`);
    process.exit(1);
  }
}

function buildIcons() {
  const marketinIconJS = `bash ./scripts/build/utils/copyFile.sh ${marketingIconsFolder}/chi-marketing-icons.js ${jsDist}`;
  const marketingIconSVG = `bash ./scripts/build/utils/copyFiles.sh ${marketingIconsFolder}/svg ${svgFolder}`;
  const addCopyRight = `bash ./scripts/build/utils/addCopy.sh "${copyRight}" "${jsDist}/chi-marketing-icons.js" "${jsDist}/input-file.js"`;

  const tasks = [
    { script: marketinIconJS, message: 'Building marketing icons JavaScript' },
    { script: marketingIconSVG, message: 'Copying marketing icon SVGs' },
    { script: addCopyRight, message: 'Adding copyright to JS files' },
  ];

  for (const { script, message } of tasks) {
    const spinner = ora(message).start();
    
    runBashScript(script, spinner, message);
  }
}

buildIcons();
