import gulp from 'gulp';
import * as chi from '../scripts/chi';

gulp.task('build:chi:styles', () => chi.buildCss({ dest: 'dist' }));
