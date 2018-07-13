import gulp from 'gulp';
import { Folders } from './constants';

const gulpPlugins = require('gulp-load-plugins')();

gulp.task('build:website:images', () => gulp.src('src/website/assets/images/**/*')
  .pipe(gulpPlugins.cached('images', {
    optimizeMemory: true
  }))
  .pipe(gulpPlugins.plumber())
  .pipe(gulpPlugins.image({
    pngquant: true,
    optipng: true,
    zopflipng: true,
    jpegRecompress: true,
    jpegoptim: true,
    mozjpeg: true,
    gifsicle: true,
    svgo: true
  }))
  .pipe(gulp.dest('dist/assets/images'))
  .pipe(gulpPlugins.connect.reload())
);
