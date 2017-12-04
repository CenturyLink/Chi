import gulp from 'gulp';
import path from 'path';
import * as chi from '@ctl/chi';
import { Folders } from './constants';

const chiAssetsFolder = path.join(Folders.dist.STYLES, 'chi');

const chiAssetsPath = chiAssetsFolder.substring(Folders.DIST.length) + '/';

gulp.task('build-external-assets', () => {
  const names = ['all'];

  chi.buildCss({ names, dest: Folders.dist.STYLES, assetsPath: chiAssetsPath });
  chi.copyAssets({ names, dest: chiAssetsFolder });
});
