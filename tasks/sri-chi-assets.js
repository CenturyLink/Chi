import gulp from 'gulp';
import sri from 'gulp-sri';

gulp.task('sri:chi:assets', function () {
  return gulp.src(['dist/chi.css', 'dist/js/chi.js'])
    .pipe(sri())
    .pipe(gulp.dest('.'));
});