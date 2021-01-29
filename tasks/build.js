import gulp from 'gulp';

gulp.task('build', gulp.series(
  'clean',
  'build:chi',
  'srichicss',
  'srichijs',
  'build:test',
  'build:website',
  'build:boilerplates',
  'copy:chi:ce-scripts'
));
