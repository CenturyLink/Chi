import path from 'path';

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import wait from 'gulp-wait';

const publicFolder = 'dist/tests';
const rootFolder = path.join(__dirname, '..');

function buildTestStyles () {
  return gulp.src(path.join(rootFolder, 'test', 'chi', '**', '*.scss'))
    .pipe(plumber())
    .pipe(sass({
      includePaths: [
        'node_modules',
        path.join(rootFolder, 'src', 'chi')
      ],
      outputStyle: 'compressed'
    })
      .on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 2 versions', 'ie >= 10']
      }),
      cssnano({zindex: false})
    ]))
    .pipe(gulp.dest(publicFolder))
    .pipe(wait(1500));
}

buildTestStyles.description = 'Builds stiles for test pages. Returns a stream. ';
gulp.task('build:test:styles', buildTestStyles);
