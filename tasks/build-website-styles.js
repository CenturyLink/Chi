import path from 'path';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulp from 'gulp';
import { Folders } from './constants';

const gulpPlugins = require('gulp-load-plugins')();

gulp.task('build:website:styles', () =>
  gulp.src(path.join('src/website/assets/styles', '**', '*.scss'))
    .pipe(gulpPlugins.plumber())
    .pipe(gulpPlugins.sass({
      includePaths: [
        path.join(Folders.ROOT, 'node_modules')
      ],
      outputStyle: 'compressed'
    })
      .on('error', gulpPlugins.sass.logError))
    .pipe(gulpPlugins.postcss([
      autoprefixer({
        browsers: ['last 2 versions', 'ie >= 10']
      }),
      cssnano()
    ]))
    .pipe(gulp.dest('dist/assets/styles'))
    .pipe(gulpPlugins.connect.reload())
);
