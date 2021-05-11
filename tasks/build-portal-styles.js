import gulp from 'gulp';
import * as chi from '../scripts/chi';
import {server} from './serve';
import path from 'path';
import { Folders } from './constants';

function copyPortalFontsFiles() {
  return gulp.src(path.join(Folders.SRC, 'chi/themes/portal/typography/fonts/**/*'))
    .pipe(gulp.dest(path.join(Folders.DIST, 'fonts/themes/portal/')));
}

function buildPortalStyles(){
  if (server && server.active) {
    return chi.buildPortal({ dest: 'dist' })
      .pipe(server.stream()); //Updates css on the fly.
  } else {
    return chi.buildPortal({ dest: 'dist' });
  }
}

buildPortalStyles.description = "Builds Chi SCSS files into one minimized CSS file. ";
gulp.task('build:portal:styles', gulp.series(copyPortalFontsFiles, buildPortalStyles));
