import gulp from 'gulp';
import * as chi from '../scripts/chi';
import {server} from './serve';
import path from 'path';
import { Folders } from './constants';

function copyCtlFontsFiles() {
  return gulp.src(path.join(Folders.SRC, 'chi/themes/centurylink/typography/fonts/**/*'))
    .pipe(gulp.dest(path.join(Folders.DIST, 'fonts/themes/centurylink/')));
}

function buildCtlStyles(){
  if (server && server.active) {
    return chi.buildCtl({ dest: 'dist' })
      .pipe(server.stream()); //Updates css on the fly.
  } else {
    return chi.buildCtl({ dest: 'dist' });
  }
}

buildCtlStyles.description = "Builds Chi SCSS files into one minimized CSS file. ";
gulp.task('build:ctl:styles', gulp.series(copyCtlFontsFiles, buildCtlStyles));
