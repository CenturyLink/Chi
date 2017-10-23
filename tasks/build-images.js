import gulp from 'gulp';
import { Folders } from './constants';

const gulpPlugins = require('gulp-load-plugins')();

gulp.task('build-images', () => gulp.src(`${Folders.src.IMAGES}/**/*`)
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
  .pipe(gulp.dest(Folders.dist.IMAGES))
  .pipe(gulpPlugins.connect.reload())
);
