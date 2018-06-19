import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', done => runSequence(
  'clean-dist',
  'build-external-assets',
  'build-assets',
  'build-docs',
  done
));
