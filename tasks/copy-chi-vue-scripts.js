import gulp from 'gulp';
import path from 'path';
import { Folders } from './constants';

const sources = path.join(Folders.SRC, 'chi-vue/umd/**/*');
const destination = path.join(Folders.DIST, 'chi-vue/umd');

function copyChiVueScripts() {
  return gulp.src(sources)
    .pipe(gulp.dest(destination));
}

copyChiVueScripts.description = 'Copies Chi Vue scripts to dist folder';

gulp.task('copy:chi-vue:scripts', copyChiVueScripts);
