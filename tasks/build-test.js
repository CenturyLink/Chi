import gulp from 'gulp';

gulp.task('build:test', gulp.series(
  'build:test:styles',
  'build:test:fixtures'
));
