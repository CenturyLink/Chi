import gulp from 'gulp';
import path from 'path';
import { Folders } from './constants';

const sources = path.join(Folders.SRC, 'documentation/dist/**/*');
const destination = path.join(Folders.DIST, '/');

function copyDocumentationCompilation () {
  return gulp.src(sources)
    .pipe(gulp.dest(destination));
}

copyDocumentationCompilation.description = 'Copies Vue documentation. ';

gulp.task('copy:documentation:compilation', copyDocumentationCompilation);
