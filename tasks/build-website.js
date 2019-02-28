import gulp from 'gulp';

gulp.task('build:website', gulp.series(
  'build:website:images',
  'build:website:styles',
  'build:website:scripts',
  'build:website:views'
));
