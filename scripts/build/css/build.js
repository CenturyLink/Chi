import { execFileSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';
import ora from 'ora';

const allowedThemes = ['lumen', 'portal', 'connect', 'test', 'colt', 'brightspeed', 'centurylink'];
const themes = process.env.THEMES_TO_BUILD?.split(',') || allowedThemes;

const __dirname = path.resolve();
const isWindows = process.platform === 'win32';

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
  const spinner = ora(`[CHI]: Building ${theme} theme (no file mutations)`).start();

  try {
    deleteCssFile(theme);
    execFileSync('cross-env', [`THEME=${theme}`, 'vite', 'build', '--c', 'vite-css.config.ts'], { stdio: 'ignore' });
    spinner.succeed(`[CHI]: Build for ${theme} theme completed successfully`);
  } catch (error) {
    spinner.fail(`[CHI]: Error during build for ${theme} theme: ${error.message}`);
    throw error;
  }
};

const buildAllThemes = async () => {
  for (const theme of themes) {
    await buildTheme(theme);
  }
};

buildAllThemes();
