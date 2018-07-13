import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', done => runSequence(
  'clean',
  'build:chi',
  'build:test',
  'build:website',
  done
));
