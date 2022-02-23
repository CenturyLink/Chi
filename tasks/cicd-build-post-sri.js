import gulp from 'gulp';

gulp.task('cicd:build:post:sri', gulp.series(
  'build:website',
  'update:boilerplate:assets',
  'build:boilerplates'
));
