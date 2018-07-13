import gulp from 'gulp';
const plugins = require('gulp-load-plugins')();

export let server;

gulp.task('serve', [ 'build' ], () => {
  server = plugins.connect.server({
    name: 'Chi',
    root: 'dist',
    port: 8000,
    livereload: true
  });

  return server;
});
