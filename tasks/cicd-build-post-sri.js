import gulp from 'gulp';

gulp.task('cicd:build:post:sri', gulp.series(
  'build:website',
  'copy:documentation:compilation',
  'update:boilerplate:assets',
  'build:boilerplates'
));
