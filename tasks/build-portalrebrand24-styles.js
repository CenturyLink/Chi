import gulp from 'gulp';
import * as chi from '../scripts/chi';
import {server} from './serve';
import path from 'path';
import { Folders } from './constants';

function copyPortalRebrand24FontsFiles() {
  return gulp.src(path.join(Folders.SRC, 'chi/themes/portalrebrand24/typography/fonts/**/*'))
    .pipe(gulp.dest(path.join(Folders.DIST, 'fonts/themes/portalrebrand24/')));
}

function buildPortalRebrand24Styles(){
  if (server && server.active) {
    return chi.buildPortalRebrand24({ dest: 'dist' })
      .pipe(server.stream()); //Updates css on the fly.
  } else {
    return chi.buildPortalRebrand24({ dest: 'dist' });
  }
}

buildPortalRebrand24Styles.description = "Builds Portal Rebrand24 theme SCSS files into one minimized chi-portalrebrand24.css file. ";
gulp.task('build:portalrebrand24:styles', gulp.series(copyPortalRebrand24FontsFiles, buildPortalRebrand24Styles));