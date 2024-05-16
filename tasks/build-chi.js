import gulp from 'gulp';

gulp.task('build:chi', gulp.series(
  'build:chi:styles',
  'build:ctl:styles',
  'build:portal:styles',
  'build:brightspeed:styles',
  'build:portalrebrand24:styles',
  'build:lumenrebrand24:styles',
  'build:colt:styles',
  'build:chi:assets',
  'build:chi:sprite',
  'build:chi:scripts',
  'build:chi:scriptsES6',
  'build:chi:scriptsAMD',
  'build:test:fixtures'
));
