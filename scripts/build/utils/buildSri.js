import ssri from 'ssri';
import { promises as fs } from 'fs';
import { resolve } from 'path';

const __dirname = resolve(); 

const filesToHash = [
  'dist/chi.css',
  'dist/chi-centurylink.css',
  'dist/chi-portal.css',
  'dist/chi-portal-2025.css',
  'dist/chi-brightspeed.css',
  'dist/chi-colt.css',
  'dist/js/chi.js',
  'dist/assets/themes/lumen/images/favicon.svg',
  'dist/assets/themes/lumen/images/favicon.ico',
  'dist/assets/themes/centurylink/images/favicon.svg',
  'dist/assets/themes/centurylink/images/favicon.ico',
  'dist/assets/themes/brightspeed/images/favicon.svg',
  'dist/assets/themes/brightspeed/images/favicon.ico',
  'dist/assets/themes/colt/images/favicon.svg',
  'dist/assets/themes/colt/images/favicon.ico',
  'dist/assets/themes/colt/images/background-hero.png',
  'dist/assets/themes/colt/images/background-login.png',
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
