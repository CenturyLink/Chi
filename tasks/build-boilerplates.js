import gulp from 'gulp';
import * as chi from '../scripts/chi';
const zip = require('gulp-zip');
const debug = require('gulp-debug');


const builVuedBoilerplate = () => {
  return gulp.src(['src/boilerplates/vue/**/*', '!src/boilerplates/vue/vue-boilerplate/node_modules/**/*'])
    .pipe(debug())
    .pipe(zip('dist/boilerplates/vue-boilerplate.zip'))
    .pipe(debug())
    .pipe(gulp.dest('./'))
    .pipe(debug())
};

builVuedBoilerplate.description = 'Zips Vue boilerplate';

const buildStencilBoilerplate = () => {
  return gulp.src(['src/boilerplates/stencil/**/*', '!src/boilerplates/stencil/stencil-boilerplate/node_modules/**/*'])
    .pipe(debug())
    .pipe(zip('dist/boilerplates/stencil-boilerplate.zip'))
    .pipe(debug())
    .pipe(gulp.dest('./'))
    .pipe(debug())
};

buildStencilBoilerplate.description = 'Zips Stencil boilerplate';

gulp.task('build:boilerplates', gulp.parallel(builVuedBoilerplate, buildStencilBoilerplate));
