import gulp from 'gulp';
import { Folders } from './constants';

export let server;

const plugins = require('gulp-load-plugins')();

gulp.task('serve', ['build'], () => {
  server = plugins.connect.server({
      name: 'CenturyLink Human Interface Documentation',
      root: [Folders.DIST],
      port: 8080,
      livereload: true
  });

  return server;
});
