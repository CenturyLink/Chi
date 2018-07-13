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

gulp.task('test', done => {
  runSequence(
    'lint:css', 'backstop-test', done
  );
});
