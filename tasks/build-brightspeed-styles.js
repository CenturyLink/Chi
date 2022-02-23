import gulp from 'gulp';
import * as chi from '../scripts/chi';
import {server} from './serve';
import path from 'path';
import { Folders } from './constants';

function copyBrightspeedFontsFiles() {
  return gulp.src(path.join(Folders.SRC, 'chi/themes/brightspeed/typography/fonts/**/*'))
    .pipe(gulp.dest(path.join(Folders.DIST, 'fonts/themes/brightspeed/')));
}

function buildBrightspeedStyles(){
  if (server && server.active) {
    return chi.buildBrightspeed({ dest: 'dist' })
      .pipe(server.stream()); //Updates css on the fly.
  } else {
    return chi.buildBrightspeed({ dest: 'dist' });
  }
}

buildBrightspeedStyles.description = "Builds Brightspeed theme SCSS files into one minimized chi-brightspeed.css file. ";
gulp.task(
  'build:brightspeed:styles',
  gulp.series(copyBrightspeedFontsFiles, buildBrightspeedStyles)
);
