import ssri from 'ssri';
import packageJson from '../../../package.json' with { type: 'json' };
import fs from 'fs';
import path from 'path';
import { writeFile } from 'node:fs/promises'
import { Readable } from 'node:stream'
import { readFile, readFileSync } from 'node:fs';

const ensureLocalDirs = (file) => {
  const localDir = path.dirname(file);
  
  if (!fs.existsSync(localDir)){
    fs.mkdirSync(localDir, { recursive: true });
  }
}


(async () => {
  const staggingUrl = `https://assets-dev.ctl.io/chi/${packageJson.version}`;
  const staggingSri = await (await fetch(`${staggingUrl}/sri.json`)).json();

  for (let filePath in staggingSri) {
    const staggingFileUrl = `${staggingUrl}/${filePath.replace('dist/', '')}`;

    ensureLocalDirs(filePath);

    const response = await fetch(staggingFileUrl);
    await writeFile(filePath, Readable.fromWeb(response.body));

    const sri = await ssri.fromData(readFileSync(filePath), {algorithms: ['sha256']});
    const isOk = sri.toString() === staggingSri[filePath];

    if (!isOk) {
      console.log(`\nIntegrity failed for file "${filePath}".`);
      console.log(`Expected: "${staggingSri[filePath]}"\nGot:      "${sri}"`);
    } else {
      console.log(`Integrity OK for "${filePath}".`);
    }
  }
})();
