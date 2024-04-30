import gulp from 'gulp';
import * as chi from '../scripts/chi';
import {server} from './serve';
import path from 'path';
import { Folders } from './constants';

function copyRebrand24FontsFiles() {
  return gulp.src(path.join(Folders.SRC, 'chi/themes/rebrand24/typography/fonts/**/*'))
    .pipe(gulp.dest(path.join(Folders.DIST, 'fonts/themes/Rebrand24/')));
}

function buildRebrand24Styles(){
  if (server && server.active) {
    return chi.buildRebrand24({ dest: 'dist' })
      .pipe(server.stream()); //Updates css on the fly.
  } else {
    return chi.buildRebrand24({ dest: 'dist' });
  }
}

buildRebrand24Styles.description = "Builds Rebrand24 theme SCSS files into one minimized chi-rebrand24.css file. ";
gulp.task('build:rebrand24:styles', gulp.series(copyRebrand24FontsFiles, buildRebrand24Styles));
