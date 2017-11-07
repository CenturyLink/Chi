import gulp from 'gulp';
import marked from 'marked';
import metalsmith from 'metalsmith';
import { getLang, highlight } from './helpers/beautify-code';
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

const renderer = new marked.Renderer();

renderer.code = function(code, lang) {
  code = this.options.highlight(code, lang);

  if (!lang) {
    return `<pre><code>${code}</code></pre>`;
  }

  const langClass = this.options.langPrefix + lang;

  return `<pre class="${langClass}"><code class="${langClass}">${code}</code></pre>`;
};

gulp.task('build-docs', () => {
  const promise = new Promise((resolve, reject) => {
    metalsmith(Folders.ROOT)
      .source(Paths.src.PAGES)
      .destination(Folders.DIST)
      .clean(false)

      .use(metalsmithPlugins.collections({
        Foundations: {
          pattern: 'foundations/**/*.{md,pug}',
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
        pattern: '**/*.{md,pug}',
        engineOptions: {
          doctype: 'html',
          gfm: true,
          smartypants: true,
          renderer: renderer,
          langPrefix: 'language-',
          highlight,
          filters: {
            code: (text, options) => {
              const lang = getLang(options.lang);

              return `<pre class="language-${lang}"><code class="language-${lang}">${highlight(text, lang)}</code></pre>`;
            }
          }
        }
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
