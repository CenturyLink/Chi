import { execFileSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';
import ora from 'ora';

const allowedThemes = ['lumen', 'portal', 'connect', 'centurylink', 'colt', 'brightspeed', 'test'];
const themes = (process.env.THEMES_TO_BUILD || 'lumen,portal,connect,centurylink,colt,brightspeed,test')
  .split(',')
  .filter(theme => allowedThemes.includes(theme));

const scripts = {
  replace: './scripts/build/css/replace-scss.sh',
  restore: './scripts/build/css/restore-scss.sh',
};
const __dirname = path.resolve();
const isWindows = process.platform === 'win32';

const runBashScript = (scriptPath, theme, message) => {
  const spinner = message ? ora(message).start() : null;

  try {
    execFileSync('bash', [scriptPath, theme], { stdio: 'ignore' });
    spinner?.succeed(`[CHI]: ${message} completed successfully`);
  } catch (error) {
    spinner?.fail(`[CHI]: Error executing ${scriptPath} for ${theme}: ${error.message}`);
    process.exit(1);
  }
};

const deleteCssFile = (theme) => {
  if (!allowedThemes.includes(theme)) {
    throw new Error(`[CHI]: Invalid theme: ${theme}`);
  }

  const fileName = theme === 'lumen' ? 'chi.css' : `chi-${theme}.css`;
  const filePath = path.resolve(__dirname, 'dist', fileName);

  if (existsSync(filePath)) {
    try {
      if (isWindows) {
        execFileSync('cmd', ['/c', 'del', '/f', `"${filePath}"`], { shell: true });
      } else {
        execFileSync('rm', ['-f', filePath]);
      }
    } catch (error) {
      console.error(`[CHI]: Error deleting ${fileName}: ${error.message}`);
    }
  }
};

const buildTheme = async (theme) => {
  const spinner = ora(`[CHI]: Building ${theme} theme`).start();

  try {
    deleteCssFile(theme);
    runBashScript(scripts.restore, theme);
    runBashScript(scripts.replace, theme);
    execFileSync('cross-env', [`THEME=${theme}`, 'vite', 'build', '--c', 'vite-css.config.ts'], { stdio: 'ignore' });
    spinner.succeed(`[CHI]: Build for ${theme} theme completed successfully`);
  } catch (error) {
    spinner.fail(`[CHI]: Error during build for ${theme} theme: ${error.message}`);
  } finally {
    runBashScript(scripts.restore, theme);
  }
};

const buildAllThemes = async () => {
  for (const theme of themes) {
    await buildTheme(theme);
  }
};

buildAllThemes();
