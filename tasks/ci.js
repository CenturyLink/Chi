import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('ci', done => {
  process.env.CI = true;

  runSequence(
    'css-lint', 'backstop-test', done
  );
});
