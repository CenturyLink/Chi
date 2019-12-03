import gulp from 'gulp';

gulp.task('build:chi', gulp.series(
  'lint:css:fix',
  'build:chi:styles',
  'build:chi:assets',
  'build:chi:sprite',
  'build:chi:scripts',
  'build:chi:scriptsES6',
  'build:chi:scriptsAMD',
  'build:test:fixtures'
));
