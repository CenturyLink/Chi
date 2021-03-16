import gulp from 'gulp';

gulp.task('build', gulp.series(
  'clean',
  'build:chi',
  'build:test',
  'copy:chi:ce-scripts',
  'sri:chi:assets',
  'build:website',
  'update:boilerplate:assets',
  'build:boilerplates',
));
