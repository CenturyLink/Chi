import gulp from 'gulp';
import sri from 'gulp-sri';

gulp.task('sri:chi:assets', function () {
  return gulp.src([
    'dist/chi.css',
    'dist/chi-centurylink.css',
    'dist/chi-portal.css',
    'dist/chi-brightspeed.css',
    'dist/js/chi.js',
    'dist/assets/themes/lumen/images/favicon.svg',
    'dist/assets/themes/lumen/images/favicon.ico',
    'dist/assets/themes/centurylink/images/favicon.svg',
    'dist/assets/themes/centurylink/images/favicon.ico',
    'dist/assets/themes/brightspeed/images/favicon.svg',
    'dist/assets/themes/brightspeed/images/favicon.ico',
    'dist/js/ce/ux-chi-ce/ux-chi-ce.esm.js',
    'dist/js/ce/ux-chi-ce.js'])
    .pipe(sri())
    .pipe(gulp.dest('.'));
});
