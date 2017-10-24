import gulp from 'gulp';
import metalsmith from 'metalsmith';
import collectionSorter from './helpers/collection-sorter';
import * as pugUtils from './helpers/pug-utils';
import { Folders, Paths } from './constants';

const gulpPlugins = require('gulp-load-plugins')();
const metalsmithPlugins = {
  collections: require('metalsmith-collections'),
  headings: require('metalsmith-headings'),
  inPlace: require('metalsmith-in-place'),
  inlineSource: require('metalsmith-inline-source'),
  layouts: require('metalsmith-layouts'),
  permalinks: require('metalsmith-permalinks'),
  rename: require('metalsmith-rename'),
};

gulp.task('build-docs', () => {
  const promise = new Promise((resolve, reject) => {
    metalsmith(Folders.ROOT)
      .source(Paths.src.PAGES)
      .destination(Folders.DIST)
      .clean(false)

      .use(metalsmithPlugins.collections({
        'Getting Started': {
          pattern: 'getting-started/**/*.{md,pug}',
          sortBy: collectionSorter(['Overview'])
        },
        Style: {
          pattern: 'style/**/*.{md,pug}',
          sortBy: collectionSorter(['Overview'])
        },
        Elements: {
          pattern: 'elements/**/*.{md,pug}',
          sortBy: collectionSorter(['Overview'])
        },
        Components: {
          pattern: 'components/**/*.{md,pug}',
          sortBy: collectionSorter(['Overview'])
        },
        Utilities: {
          pattern: 'utilities/**/*.{md,pug}',
          sortBy: collectionSorter(['Overview'])
        },
        Tokens: {
          pattern: 'tokens/**/*.{md,pug}',
          sortBy: collectionSorter(['Overview'])
        },
        About: {
          pattern: 'about/**/*.{md,pug}',
          sortBy: collectionSorter(['Overview'])
        },
      }))
      .use(metalsmithPlugins.inPlace({
        pattern: '**/*.{md,pug}'
      }))
      .use(metalsmithPlugins.headings('h2'))
      .use(metalsmithPlugins.inlineSource())
      .use(metalsmithPlugins.permalinks())
      .use(metalsmithPlugins.layouts({
        engine: 'pug',
        doctype: 'html',
        default: 'default.pug',
        pattern: '**/*.html',
        directory: Folders.src.LAYOUTS,
        utils: pugUtils
      }))

      .build(error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
  });

  promise.then(() => {
    gulp.src(`${Folders.DIST}/**/*.html`)
      .pipe(gulpPlugins.connect.reload());
  });

  return promise;
});
