import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build:test', done => runSequence(
  'build:test:styles',
  'build:test:fixtures',
  done
));
