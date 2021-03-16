import gulp from 'gulp';
import sri from 'gulp-sri';

gulp.task('sri:chi:assets', function () {
  return gulp.src([
    'dist/chi.css',
    'dist/js/chi.js',
    'src/website/assets/images/favicon.svg',
    'src/website/assets/images/favicon.ico',
    'dist/js/ce/ux-chi-ce/ux-chi-ce.esm.js',
    'dist/js/ce/ux-chi-ce.js'])
    .pipe(sri())
    .pipe(gulp.dest('.'));
});
