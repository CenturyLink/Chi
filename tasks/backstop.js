import gulp from 'gulp';
import backstopjs from 'backstopjs';
import { server } from './serve.js';

const plugins = require('gulp-load-plugins')();

gulp.task('backstop-test', ['serve'], () => backstopjs('test')
  .finally(() => {
    server.lr.close();
    plugins.connect.serverClose();
  }));

gulp.task('backstop-approve', () => backstopjs('approve'));
