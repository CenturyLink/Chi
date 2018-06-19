import gulp from 'gulp';
import { Folders } from './constants';

gulp.task('watch', ['serve'], () => {
  gulp.watch(`${Folders.src.IMAGES}/**/*`, ['build-images']);
  gulp.watch(`${Folders.src.STYLES}/**/*`, ['build-styles']);
  gulp.watch(`${Folders.src.SCRIPTS}/**/*`, ['build-scripts']);
  gulp.watch(`${Folders.src.DOCS}/**/*`, ['build-docs']);
});
