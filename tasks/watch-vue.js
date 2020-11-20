import gulp from 'gulp';

const watchVue = gulp.parallel('watch', 'vue:start');
watchVue.description = "Starts chi and vue watch & compile. ";
gulp.task('vue:watch', watchVue);
