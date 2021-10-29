import gulp from 'gulp';

gulp.task('build', gulp.series(
  'clean',
  'build:chi',
  'build:test',
  'build:website',
  'update:boilerplate:assets',
  'build:boilerplates',
  'copy:chi:ce-docs-scripts',
  'copy:chi:ce-scripts',
  'copy:chi-vue:scripts'
));
