import gulp from 'gulp';
import * as chi from '../scripts/chi';

gulp.task('build:chi:assets', () => chi.copyAssets({ dest: 'dist' }));
