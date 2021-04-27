import gulp from 'gulp';

gulp.task('build:chi', gulp.series(
  'build:chi:styles',
  'build:ctl:styles',
  'build:portal:styles',
  'build:chi:assets',
  'build:chi:sprite',
  'build:chi:scripts',
  'build:chi:scriptsES6',
  'build:chi:scriptsAMD',
  'build:test:fixtures'
));
