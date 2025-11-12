import pug from 'pug';
import fs from 'fs';
import path, { resolve } from 'path';
import ora from 'ora';

const __dirname = resolve();
const inputDir = path.join(__dirname, 'tests');
const componentsJsonPath = path.join(inputDir, 'tests.json');

const THEMES_TO_TEST = process.argv[2] ? process.argv[2].split(',') : ['lumen'];

let components, customElements, foundations, js;

try {
  const jsonData = fs.readFileSync(componentsJsonPath, 'utf8');
  const jsonParsed = JSON.parse(jsonData);

  components = jsonParsed.components;
  customElements = jsonParsed['custom-elements'];
  foundations = jsonParsed.foundations;
  js = jsonParsed.js;
} catch (error) {
  console.error(`[CHI]: Error reading JSON file: ${error.message}`);
  process.exit(1);
}

function compilePugFiles(dir, outputDir, theme, spinner) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      compilePugFiles(fullPath, outputDir, theme, spinner);
    } else if (path.extname(file) === '.pug') {
      let outputFile;

      if (dir === inputDir) {
        outputFile = path.join(outputDir, file.replace(/\.pug$/, '.html'));
      } else {
        outputFile = path.join(outputDir, path.relative(inputDir, fullPath).replace(/\.pug$/, '.html'));
      }

      fs.mkdirSync(path.dirname(outputFile), { recursive: true });
      const compiledFunction = pug.compileFile(fullPath);
      const html = compiledFunction({ components, customElements, foundations, js });

      fs.writeFileSync(outputFile, html);
    }
  });
}

const updateThemeInTests = (theme) => {
  const styleSheet = theme === 'lumen' ? 'chi.css' : `chi-${theme}.css`;

  const textLayoutPath = path.join(inputDir, 'layout.pug');
  const indexLayoutPath = path.join(inputDir, 'index.pug');

  const layoutData = fs.readFileSync(textLayoutPath, 'utf8');
  const indexData = fs.readFileSync(indexLayoutPath, 'utf8');

  fs.writeFileSync(textLayoutPath, layoutData.replace(/chi(-.*)?.css/, styleSheet));
  fs.writeFileSync(indexLayoutPath, indexData.replace(/chi(-.*)?.css/, styleSheet));
};

const spinner = ora(`[CHI]: Building tests`).start();

const buildTests = async () => {
  for (const theme of THEMES_TO_TEST) {
    const outputDir = path.join(__dirname, `dist/tests/${theme}`);
    fs.mkdirSync(outputDir, { recursive: true });

    updateThemeInTests(theme);

    compilePugFiles(inputDir, outputDir, theme, spinner);

    updateThemeInTests('lumen');
  }
};

try {

  buildTests().then(() => spinner.succeed(`[CHI]: Tests built successfully`));
} catch (error) {
  spinner.fail(`[CHI]: Error during building tests: ${error.message}`);
}
