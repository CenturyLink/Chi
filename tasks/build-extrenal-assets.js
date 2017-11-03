import gulp from 'gulp';
import path from 'path';
import * as chi from '@ctl/chi';
import { Folders } from './constants';

const chiAssetsFolder = path.join(Folders.dist.STYLES, 'chi');

const chiAssetsPath = chiAssetsFolder.substring(Folders.DIST.length) + '/';

gulp.task('build-external-assets', () => {
  chi.buildCss({ dest: Folders.dist.STYLES, assetsPath: chiAssetsPath });
  chi.copyAssets({ dest: chiAssetsFolder });
});
