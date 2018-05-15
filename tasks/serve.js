import gulp from 'gulp';
import { Folders } from './constants';

export let server;

const plugins = require('gulp-load-plugins')();

gulp.task('serve', ['build'], () => {
  server = plugins.connect.server({
      name: 'Chi Documentation',
      root: [Folders.DIST],
      port: 8080,
      livereload: {
        port: 35730
      }
  });

  return server;
});
