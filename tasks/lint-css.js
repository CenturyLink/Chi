import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import sassLint from 'gulp-sass-lint';
import plumber from 'gulp-plumber';

const rootFolder = path.join(__dirname, '..');
const sources = path.join(rootFolder, '{src,test}', 'chi', '**', '*.scss');
const reportsFolder = path.join(rootFolder, 'reports');
const reportFile = path.join(reportsFolder, 'sass-lint.xml');

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
  stream.pipe(plumber());
}

function lintSassCode(stream, file) {
  stream.pipe(sassLint({
    options: {
      configFile: '.sass-lint.yml',
      formatter: process.env.CI ? 'checkstyle' : 'stylish'
    }
  }))
    .pipe(sassLint.format(file));
}

function lintCss (done) {
  const stream = gulp.src(sources);
  const reportFile = setupReportFileIfExecutionIsInCIServer();

  closeFileOnStreamFinish(stream, reportFile);
  preventPipeBreakingFromGulpPluginErrors(stream);
  lintSassCode(stream, reportFile);
  done();
}

lintCss.description = "Lints SASS code. ";

gulp.task('lint:css', lintCss);
