import del from 'del';
import gulp from 'gulp';
import runSequence from 'run-sequence';
import chi from '../scripts/chi';

const buildFolder = 'dist';

gulp.task('css-build-src', () => chi.buildCss({ dest: buildFolder }));

gulp.task('css-build-assets', () => chi.copyAssets({ dest: buildfolder }));

gulp.task('css-clean', done => del([buildFolder], done));

gulp.task('css-build', done => runSequence(
  'css-clean', [
    'css-build-src',
    'css-build-assets'
  ], done
));
