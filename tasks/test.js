import gulp from 'gulp';

gulp.task('test', gulp.series(
  'lint:css',
  'backstop-test-responsive',
  'backstop-test-non-responsive',
  'backstop-custom-elements-test'
));
