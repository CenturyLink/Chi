import gulp from 'gulp';
import * as chi from '../scripts/chi';
import {server} from './serve';
import path from 'path';
import { Folders } from './constants';

function copyLumenRebrand24FontsFiles() {
  return gulp.src(path.join(Folders.SRC, 'chi/themes/lumen-rebrand24/typography/fonts/**/*'))
    .pipe(gulp.dest(path.join(Folders.DIST, 'fonts/themes/LumenRebrand24/')));
}

function buildLumenRebrand24Styles(){
  if (server && server.active) {
    return chi.buildLumenRebrand24({ dest: 'dist' })
      .pipe(server.stream()); //Updates css on the fly.
  } else {
    return chi.buildLumenRebrand24({ dest: 'dist' });
  }
}

buildLumenRebrand24Styles.description = "Builds Lumen Rebrand24 theme SCSS files into one minimized chi-lumen-rebrand24.css file. ";
gulp.task('build:lumen-rebrand24:styles', gulp.series(copyLumenRebrand24FontsFiles, buildLumenRebrand24Styles));
