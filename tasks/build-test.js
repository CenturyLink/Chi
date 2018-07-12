import gulp from 'gulp';

gulp.task('build:test', done => runSequence(
  'clean',
  'build:chi',
  'build:test:styles',
  'build:test:fixtures',
  done
));
