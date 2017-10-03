import gulp from 'gulp';

gulp.task('watch', ['serve'], () => {
  gulp.watch('**/*.scss', ['css-lint', 'test-build']);
  gulp.watch('**/*.pug', ['test-build']);
});
