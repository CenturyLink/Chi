import ssri from 'ssri';
import { promises as fs } from 'fs';
import { resolve } from 'path';

const __dirname = resolve(); 

const validThemes = ['lumen', 'portal', 'connect', 'test', 'colt', 'brightspeed', 'centurylink'];
const localDefaultThemes = ['lumen', 'connect', 'centurylink', 'test'];
const prodDefaultThemes = ['lumen', 'portal', 'connect', 'colt', 'brightspeed', 'centurylink'];

const selectedThemes = process.env.BUILD_TARGET === 'prod'
  ? prodDefaultThemes
  : (process.env.THEMES_TO_BUILD?.split(',') || localDefaultThemes);

const cssFilesToHash = selectedThemes.map((theme) => {
  if (!validThemes.includes(theme)) {
    throw new Error(`[CHI]: Invalid theme for SRI: ${theme}`);
  }

  return theme === 'lumen' ? 'dist/chi.css' : `dist/chi-${theme}.css`;
});

const filesToHash = [
  ...cssFilesToHash,
  'dist/js/chi.js',
  'dist/assets/themes/lumen/images/favicon.svg',
  'dist/assets/themes/lumen/images/favicon.ico',
  'dist/assets/themes/connect/images/favicon.svg',
  'dist/assets/themes/connect/images/favicon.ico',
  'dist/assets/themes/centurylink/images/favicon.svg',
  'dist/assets/themes/centurylink/images/favicon.ico',
  'dist/js/ce/ux-chi-ce/ux-chi-ce.esm.js',
  'dist/js/ce/ux-chi-ce/ux-chi-ce.js'
];

async function generateSRIJSON() {
  const sriData = {};

  for (const file of filesToHash) {
    const filePath = resolve(__dirname, file);
    
    try {
      const content = await fs.readFile(filePath);
      const integrity = await ssri.fromData(content, { algorithms: ['sha256'] });
      
      sriData[file] = integrity.toString();
    } catch (err) {
      console.error(`Error reading file ${filePath}:`, err.message);
    }
  }

  await fs.writeFile('sri.json', JSON.stringify(sriData, null, 2));
}

generateSRIJSON().catch(console.error);
