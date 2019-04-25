import gulp from 'gulp';

gulp.task('test:custom-elements', gulp.series(
  'lint:typescript',
  'backstop-custom-elements-test'
));
