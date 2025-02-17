const { exec } = require('child_process');
const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const packageJsonRoute = path.resolve(__dirname, '../../package.json');
let serverProcess = null;

const execPromise = async (command, spinnerMessage) => {
  const ora = (await import('ora')).default;
  const spinner = ora(spinnerMessage).start();
  
  console.time(spinnerMessage);

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      const status = error ? `[CHI]: ${error.message}` : `[CHI]: Build completed successfully`;
      
      if (error) {
        spinner.fail(status);
        reject(error);
      } else {
        spinner.succeed(status);
        console.timeEnd(spinnerMessage);
        resolve();
      }
    });
  });
};

const startServer = () => {
  serverProcess = exec('npm run start', (error) => {
    if (error) {
      console.error(`[CHI]: ${error.message}`);
    }
  });
};

const stopServer = () => {
  if (serverProcess) {
    serverProcess.kill();
  }
};

const buildProject = () => execPromise('npm run build', '[CHI]: Building project');

const rebuildCss = async () => {
  const buildCssRoute = path.resolve(__dirname, '../build/css/build.js');
  
  await execPromise(`node ${buildCssRoute}`, '[CHI]: Rebuilding CSS');
  startServer();
};

const watchFiles = () => {
  const watchPath = path.resolve(__dirname, '../../src/chi');
  const watcher = chokidar.watch(watchPath, {
    ignored: /node_modules/,
    persistent: true,
    usePolling: true,
    interval: 1000,
    awaitWriteFinish: true,
    depth: 99,
  });

  watcher.on('change', async (filePath) => {
    if (filePath.endsWith('.scss')) {
      watcher.close();
      stopServer();
      await rebuildCss();
    }
  });

  try {
    const { version } = JSON.parse(fs.readFileSync(packageJsonRoute, 'utf-8'));
    
    console.log('[CHI]: Playground started at http://localhost:5173/');
    console.log(`[CHI]: Tests started at http://localhost:8000/chi/${version}/tests`);
    console.log(`[CHI]: Dist folder started at http://localhost:8000/chi/${version}`);
  } catch (error) {
    console.error('Error loading package.json or applying version:', error);
  }
};

const main = async () => {
  await buildProject();
  startServer();
  watchFiles();
};

main();
