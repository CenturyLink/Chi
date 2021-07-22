import path from 'path';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import { Folders } from './constants';
import { server } from './serve';
import * as chi from "../scripts/chi";

const merge = require('merge-stream');

function buildStyles(source, dest) {
  const pipes = gulp.src(path.join(source, '**', '*.scss'))
    .pipe(plumber())
    .pipe(sass({
      includePaths: [
        path.join(Folders.ROOT, 'node_modules')
      ],
      outputStyle: 'compressed'
    })
      .on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 2 versions', 'ie >= 10']
      }),
      cssnano({ zindex: false })
    ]))
    .pipe(gulp.dest(dest));

  if (server && server.active) {
    return pipes.pipe(server.stream()); //Updates css on the fly.
  } else {
    return pipes;
  }
}

function buildWebsiteStyles() {
  const centurylink = buildStyles('src/website/assets/themes/centurylink', 'dist/assets/themes/centurylink');
  const lumen = buildStyles('src/website/assets/themes/lumen', 'dist/assets/themes/lumen');
  const portal = buildStyles('src/website/assets/themes/portal', 'dist/assets/themes/portal');

  return merge(centurylink, lumen, portal);
}

buildWebsiteStyles.description = 'Builds Chi CSS library. Returns a stream.';

gulp.task('build:website:styles', buildWebsiteStyles);
