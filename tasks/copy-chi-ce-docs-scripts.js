import gulp from 'gulp';
import path from 'path';
import { Folders } from './constants';

const source = path.join(Folders.SRC, 'custom-elements/docs/docs.json');
const destination = path.join(Folders.DIST, 'js/ce');

function copyChiCeDocsScripts () {
  return gulp.src(source)
    .pipe(gulp.dest(destination));
}

copyChiCeDocsScripts.description = 'Copies stencil custom-elements docs into dist/js/ce folder. ';

gulp.task('copy:chi:ce-docs-scripts', copyChiCeDocsScripts);
