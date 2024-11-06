import pug from 'pug';
import fs from 'fs';
import path, { resolve } from 'path';
import ora from 'ora';

const __dirname = resolve();
const inputDir = path.join(__dirname, 'tests');
const outputDir = path.join(__dirname, 'dist/tests');
const componentsJsonPath = path.join(inputDir, 'tests.json');

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

fs.mkdirSync(outputDir, { recursive: true });

function compilePugFiles(dir, spinner) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      compilePugFiles(fullPath, spinner);
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

const spinner = ora(`[CHI]: Building tests`).start();

try {
  compilePugFiles(inputDir, spinner);
  spinner.succeed(`[CHI]: Tests built successfully`);
} catch (error) {
  spinner.fail(`[CHI]: Error during building tests: ${error.message}`);
}
