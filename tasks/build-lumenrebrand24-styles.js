import gulp from 'gulp';
import * as chi from '../scripts/chi';
import {server} from './serve';
import path from 'path';
import { Folders } from './constants';

function copyLumenRebrand24FontsFiles() {
  return gulp.src(path.join(Folders.SRC, 'chi/themes/lumenrebrand24/typography/fonts/**/*'))
    .pipe(gulp.dest(path.join(Folders.DIST, 'fonts/themes/lumenrebrand24/')));
}

function buildLumenRebrand24Styles(){
  if (server && server.active) {
    return chi.buildLumenRebrand24({ dest: 'dist' })
      .pipe(server.stream()); //Updates css on the fly.
  } else {
    return chi.buildLumenRebrand24({ dest: 'dist' });
  }
}

buildLumenRebrand24Styles.description = "Builds Lumen Rebrand24 theme SCSS files into one minimized chi-lumenrebrand24.css file. ";
gulp.task('build:lumenrebrand24:styles', gulp.series(copyLumenRebrand24FontsFiles, buildLumenRebrand24Styles));