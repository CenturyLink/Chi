import gulp from 'gulp';
import sass from 'gulp-sass';
import sri from 'gulp-sri';
 
gulp.task('srichijs', function() {
    var srcGlob = 'dist/js/chi.js';
    return gulp.src(srcGlob)
        .pipe(sri())
        .pipe(gulp.dest('.'));
});