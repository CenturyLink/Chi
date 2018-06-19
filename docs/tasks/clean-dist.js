import del from 'del';
import gulp from 'gulp';
import { Folders } from './constants';

gulp.task('clean-dist', done => del([Folders.DIST], done));
