import gulp from 'gulp';
import * as chi from '../scripts/chi';
const zip = require('gulp-zip');
const debug = require('gulp-debug');


const buildVueBoilerplate = () => {
  return gulp.src(['src/boilerplates/vue/**/*', '!src/boilerplates/vue/vue-boilerplate/node_modules/**/*'])
    .pipe(zip('dist/boilerplates/vue-boilerplate.zip'))
    .pipe(gulp.dest('./'));
};

buildVueBoilerplate.description = 'Zips Vue boilerplate';

const buildStencilBoilerplate = () => {
  return gulp.src(['src/boilerplates/stencil/**/*', '!src/boilerplates/stencil/stencil-boilerplate/node_modules/**/*'])
    .pipe(zip('dist/boilerplates/stencil-boilerplate.zip'))
    .pipe(gulp.dest('./'));
};

buildStencilBoilerplate.description = 'Zips Vue boilerplate';

const buildReactBoilerplate = () => {
  return gulp.src(['src/boilerplates/react/**/*', '!src/boilerplates/react/react-boilerplate/node_modules/**/*'])
    .pipe(zip('dist/boilerplates/stencil-boilerplate.zip'))
    .pipe(gulp.dest('./'));
};

buildReactBoilerplate.description = 'Zips Stencil boilerplate';

gulp.task('build:boilerplates', gulp.parallel(buildVueBoilerplate, buildStencilBoilerplate, buildReactBoilerplate));
