import run from 'gulp-run-command';
var gulp = require('gulp');

gulp.task('lint:css:fix', run('npm run lint:fix'));