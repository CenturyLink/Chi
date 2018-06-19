import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build-assets', done => runSequence(
  'build-images',
  'build-styles',
  'build-scripts',
  done
));
