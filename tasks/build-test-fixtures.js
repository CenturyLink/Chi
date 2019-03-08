import path from 'path';
import gulp from 'gulp';
import metalsmith from 'metalsmith';
import metalsmithInlineSource from 'metalsmith-inline-source';
import metalsmithLayouts from 'metalsmith-layouts';
import metalsmithPug from 'metalsmith-pug';
import wait from 'gulp-wait';
import index from 'gulp-index';

const publicFolder = 'dist/tests';
const rootFolder = path.join(__dirname, '..');

function buildTestFixtures () {
  const promise = new Promise((resolve, reject) => {
    metalsmith(rootFolder)
      .source('test/chi')
      .destination(publicFolder)
      .clean(false)
      .use(metalsmithPug({
        doctype: 'html'
      }))
      .use(metalsmithInlineSource())
      .use(metalsmithLayouts({
        default: 'test.pug',
        directory: path.join(rootFolder, 'config', 'layouts'),
        doctype: 'html',
        engine: 'pug',
        pattern: '**/*.html'
      }))

      .build(error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
  });

  promise.then(() => {
    gulp.src(`${publicFolder}/**/*.html`)
      .pipe(wait(1500));
  });

  return promise;
}

buildTestFixtures.description = 'Builds html pages por backstop tests. ' +
  'Returns a promise. ';

gulp.task('build:test:fixtures', buildTestFixtures);

function generateIndexTestFile () {
  return gulp.src(publicFolder + '/**/*.html')
    .pipe(index({
      'relativePath': publicFolder,
    }))
    .pipe(gulp.dest(publicFolder));
}

gulp.task('build:test:index', generateIndexTestFile);

generateIndexTestFile.description = 'Generates index.html files ' +
  'for easy accessing to test pages. ';
