import gulp from 'gulp';
import path from 'path';
import { Folders } from './constants';

const sources = path.join(Folders.SRC, 'chi-vue/dist/**/*');
const destination = path.join(Folders.DIST, 'js/vue');

function copyChiVueScripts() {
  return gulp.src(sources)
    .pipe(gulp.dest(destination));
}

copyChiVueScripts.description = 'Copying CHI Vue JavaScript library into dist/js/vue folder. ';

gulp.task('copy:chi:vue-scripts', copyChiVueScripts);
