import gulp from 'gulp';

gulp.task('build', gulp.series(
  'clean',
  'build:chi',
  'sri:chi:assets',
  'build:test',
  'build:website',
  'build:boilerplates',
  'copy:chi:ce-scripts'
));
