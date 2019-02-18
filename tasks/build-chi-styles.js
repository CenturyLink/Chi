import gulp from 'gulp';
import * as chi from '../scripts/chi';
import {server} from './serve';

function buildChiStyles(){
  if (server && server.active) {
    return chi.buildCss({ dest: 'dist' })
      .pipe(server.stream()); //Updates css on the fly.
  } else {
    return chi.buildCss({ dest: 'dist' });
  }
}

buildChiStyles.description = "Builds Chi SCSS files into one minimized CSS file. ";
gulp.task('build:chi:styles', buildChiStyles);
