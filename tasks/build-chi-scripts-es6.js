import gulp from 'gulp';
import { Folders } from './constants';
import path from "path";

const sources = path.join(Folders.SRC, 'chi/javascript/**/*.js');
const destination = path.join(Folders.DIST, 'es6');
const chiVueES6Boilerplate = path.join(Folders.SRC, 'boilerplates', 'es6', 'chi-vue-es6-boilerplate', 'src', 'es6');

gulp.task('build:chi:scriptsES6', () =>
  gulp.src(sources)
    .pipe(gulp.dest(destination))
    .pipe(gulp.dest(chiVueES6Boilerplate))
);
