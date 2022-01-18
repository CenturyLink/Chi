import gulp from 'gulp';

gulp.task('cicd:build:pre:sri', gulp.series(
  'clean',
  'build:chi',
  'build:test',
  'copy:chi:ce-docs-scripts',
  'copy:chi:ce-scripts',
  'copy:chi-vue:scripts',
  'build:website:images'
));
