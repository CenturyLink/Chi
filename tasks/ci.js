import gulp from 'gulp';

function ci(done) {
  process.env.CI = true;
  gulp.series(
    'lint:css',
    'backstop-test',
    done
  );
}

ci.description = 'Lints and run backstop test. ';

gulp.task('ci', ci);
