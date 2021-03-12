import gulp from 'gulp';

gulp.task('build', gulp.series(
  'clean',
  'build:chi',
  'build:test',
  'sri:chi:assets',
  'build:website',
  'copy:chi:ce-scripts',
  'update:boilerplate:assets',
  'build:boilerplates'
));
