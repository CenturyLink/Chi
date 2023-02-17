import gulp from 'gulp';
import * as chi from '../scripts/chi';
import { server } from './serve';
import path from 'path';
import { Folders } from './constants';

function copyColtFontsFiles() {
  return gulp
    .src(path.join(Folders.SRC, 'chi/themes/colt/typography/fonts/**/*'))
    .pipe(gulp.dest(path.join(Folders.DIST, 'fonts/themes/colt/')));
}

function buildColtStyles() {
  if (server && server.active) {
    return chi.buildColt({ dest: 'dist' }).pipe(server.stream()); //Updates css on the fly.
  } else {
    return chi.buildColt({ dest: 'dist' });
  }
}

buildColtStyles.description =
  'Builds Colt theme SCSS files into one minimized chi-colt.css file. ';
gulp.task(
  'build:colt:styles',
  gulp.series(copyColtFontsFiles, buildColtStyles)
);
