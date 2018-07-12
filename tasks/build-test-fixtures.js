import path from 'path';

import del from 'del';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulp from 'gulp';
import metalsmith from 'metalsmith';
import metalsmithInlineSource from 'metalsmith-inline-source';
import metalsmithLayouts from 'metalsmith-layouts';
import metalsmithPug from 'metalsmith-pug';
import runSequence from 'run-sequence';
import * as chi from '../scripts/chi';

const plugins = require('gulp-load-plugins')();
const publicFolder = 'dist/tests';
const rootFolder = path.join(__dirname, '..');

gulp.task('build:test:fixtures', () => {
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
      .pipe(plugins.wait(1500))
      .pipe(plugins.connect.reload());
  });

  return promise;
});
