import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build:website', done => runSequence(
  'build:website:images',
  'build:website:styles',
  'build:website:scripts',
  'build:website:views',
  done
));
