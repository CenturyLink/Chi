import backstop from 'backstopjs';
import fs from 'fs';
import path from 'path';

(async () => {
  try {
    const directories = [
      {
        source: 'reports/html_report/responsive/bitmaps_reference',
        destination: 'backstop_data/bitmaps_reference/responsive'
      },
      {
        source: 'reports/html_report/non_responsive/bitmaps_reference',
        destination: 'backstop_data/bitmaps_reference/non_responsive'
      }
    ];

    await backstop('approve', { config: 'backstop-responsive.json' });
    await backstop('approve', { config: 'backstop-non-responsive.json' });

    const moveFiles = (sourceDir, destDir) => {
      fs.readdirSync(sourceDir).forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const destPath = path.join(destDir, file);
  
        fs.copyFileSync(sourcePath, destPath);
      });
    };

    directories.forEach(({ source, destination }) => moveFiles(source, destination));
  } catch (error) {
    console.error('[CHI]: Error approving tests: ', error);
    process.exit(1);
  }
})();