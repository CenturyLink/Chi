import gulp from 'gulp';

const watchCustomElements = gulp.parallel('watch', 'stencil:start');
watchCustomElements.description = "Starts chi and stencil watch & compile. ";
gulp.task('custom-elements:watch', watchCustomElements);
