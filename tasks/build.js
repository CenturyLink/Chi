import gulp from 'gulp';

gulp.task('build', gulp.series(
  'clean',
  'build:chi',
  'build:test',
  'sri:chi:assets',
  'build:website',
  'update:boilerplate:assets',
  'build:boilerplates',
  'copy:chi:ce-scripts'
));
