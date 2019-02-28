import gulp from 'gulp';

gulp.task('test', done => {
  gulp.series(
    'lint:css',
    'backstop-test',
    done
  );
});
