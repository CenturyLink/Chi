import fs from 'fs';
import path from 'path';
import gulp from 'gulp';

const rootFolder = path.join(__dirname, '..');
const sources = path.join(rootFolder, 'src', 'css', '**', '*.scss');
const reportsFolder = path.join(rootFolder, 'reports');
const reportFile = path.join(reportsFolder, 'sass-lint.xml');
const plugins = require('gulp-load-plugins')();

function createFolderIfNotExists(folder) {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
}

function createReportFile() {
  createFolderIfNotExists(reportsFolder);

  return fs.createWriteStream(reportFile);
}

function closeFileOnStreamFinish(stream, file) {
  if (file) {
    stream.on('finish', () => file.end());
  }
}

function setupReportFileIfExecutionIsInCIServer() {
  if (process.env.CI) {
    return createReportFile();
  }
}

function preventPipeBreakingFromGulpPluginErrors(stream) {
  stream.pipe(plugins.plumber());
}

function lintSassCode(stream, file) {
  stream.pipe(plugins.sassLint({
    options: {
      configFile: '.sass-lint.yml',
      formatter: process.env.CI ? 'checkstyle' : 'stylish'
    }
  }))
    .pipe(plugins.sassLint.format(file));
}

gulp.task('css-lint', () => {
  const stream = gulp.src(sources);
  const reportFile = setupReportFileIfExecutionIsInCIServer();

  closeFileOnStreamFinish(stream, reportFile);
  preventPipeBreakingFromGulpPluginErrors(stream);
  lintSassCode(stream, reportFile);
});
