import gulp from 'gulp';
import path from 'path';
import { Folders } from './constants';

const sources = path.join(Folders.SRC, 'custom-elements/dist/**/*');
const destination = path.join(Folders.DIST, 'js/ce');

function copyChiCeScripts () {
  return gulp.src(sources)
    .pipe(gulp.dest(destination));
}

copyChiCeScripts.description = 'Copies stencil Chi JavaScript library into dist/js/ce folder. ';

gulp.task('copy:chi:ce-scripts', copyChiCeScripts);
