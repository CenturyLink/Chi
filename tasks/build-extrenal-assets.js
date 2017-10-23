import gulp from 'gulp';
import * as chi from '@ctl/chi';
import { Folders } from './constants';

gulp.task('build-external-assets', () => chi.chi({ dest: Folders.DIST }));
