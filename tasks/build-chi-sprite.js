import gulp from 'gulp';
import * as chi from '../scripts/chi';

gulp.task('build:chi:sprite', () => chi.buildSprite({ dest: 'dist' }));
