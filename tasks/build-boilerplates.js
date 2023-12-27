import gulp from 'gulp';
import * as chi from '../scripts/chi';
const zip = require('gulp-zip');
const debug = require('gulp-debug');

const buildVueBoilerplate = () => {
  return gulp.src(['src/boilerplates/vue/**/*', '!src/boilerplates/vue/chi-vue-boilerplate/node_modules/**/*'], {dot: true})
    .pipe(zip('dist/boilerplates/chi-vue-boilerplate.zip'))
    .pipe(gulp.dest('./'));
};

buildVueBoilerplate.description = 'Zips Vue boilerplate';

const buildStencilBoilerplate = () => {
  return gulp.src(['src/boilerplates/stencil/**/*', '!src/boilerplates/stencil/chi-stencil-boilerplate/node_modules/**/*'], {dot: true})
    .pipe(zip('dist/boilerplates/chi-stencil-boilerplate.zip'))
    .pipe(gulp.dest('./'));
};

buildStencilBoilerplate.description = 'Zips Stencil boilerplate';

const buildReactBoilerplate = () => {
  return gulp.src(['src/boilerplates/react/**/*', '!src/boilerplates/react/chi-react-boilerplate/node_modules/**/*'], {dot: true})
    .pipe(zip('dist/boilerplates/chi-react-boilerplate.zip'))
    .pipe(gulp.dest('./'));
};

buildReactBoilerplate.description = 'Zips React boilerplate';

const buildAngularBoilerplate = () => {
  return gulp.src(['src/boilerplates/angular/**/*', '!src/boilerplates/angular/chi-angular-boilerplate/node_modules/**/*'], {dot: true})
    .pipe(zip('dist/boilerplates/chi-angular-boilerplate.zip'))
    .pipe(gulp.dest('./'));
};

buildAngularBoilerplate.description = 'Zips Angular boilerplate';

gulp.task('build:boilerplates',
  gulp.parallel(
    buildVueBoilerplate,
    buildStencilBoilerplate,
    buildReactBoilerplate,
    buildAngularBoilerplate
));
