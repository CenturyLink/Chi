import gulp from 'gulp';

gulp.task('test', gulp.series(
  'lint:css',
  'backstop-test',
  'backstop-custom-elements-test'
));
