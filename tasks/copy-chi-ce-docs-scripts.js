import gulp from 'gulp';
import path from 'path';
import { Folders } from './constants';

const source = path.join(Folders.ROOT, 'lib/custom-elements/docs.json');
const nuxtDocs = path.join(Folders.SRC, 'documentation/public');

function copyChiCeDocsScripts () {
  return gulp.src(source)
    .pipe(gulp.dest(nuxtDocs));

}

gulp.task('copy:chi:ce-docs-scripts', copyChiCeDocsScripts);
