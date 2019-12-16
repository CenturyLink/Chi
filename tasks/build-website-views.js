import gulp from 'gulp';
import marked from 'marked';
import metalsmith from 'metalsmith';
import { getLang, highlight } from './helpers/beautify-code';
import collectionSorter from './helpers/collection-sorter';
import * as pugUtils from './helpers/pug-utils';
import { Folders, Paths } from './constants';
import metalsmithPug from "metalsmith-pug";
import path from 'path';
import pug from 'pug';
const stencilDoc = require('../src/custom-elements/docs/docs.json')

const metalsmithPlugins = {
  collections: require('metalsmith-collections'),
  headings: require('metalsmith-headings'),
  inPlace: require('metalsmith-in-place'),
  inlineSource: require('metalsmith-inline-source'),
  layouts: require('metalsmith-layouts'),
  permalinks: require('metalsmith-permalinks'),
  redirect: require('metalsmith-redirect'),
  rename: require('metalsmith-rename'),
  rootPath: require('metalsmith-rootpath')
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

function highlightCode(text, lang) {
  return `<pre class="language-${lang}"><code class="language-${lang}">${highlight(text, lang)}</code></pre>`;
}

function buildWebsiteViews () {
  const promise = new Promise((resolve, reject) => {
    metalsmith(Folders.ROOT)
      .source(Paths.src.PAGES)
      .destination(Folders.DIST)
      .clean(false)

      .use(metalsmithPlugins.collections({
        'Getting Started': {
          pattern: [ 'getting-started/**/*.pug', '!getting-started/introduction/_*.pug' ],
          sortBy: 'order'
        },
        'Foundations': {
          pattern: 'foundations/**/*.pug',
          sortBy: collectionSorter(['Overview'])
        },
        'Components': {
          pattern: [ 'components/**/*.pug', '!components/**/_*.pug' ],
          sortBy: collectionSorter(['Overview'])
        },
        'JavaScript': {
          pattern: [ 'javascript/**/*.pug', '!javascript/**/_*.pug' ],
          sortBy: collectionSorter(['Overview'])
        },
        'Custom Elements': {
          pattern: [ 'custom-elements/**/*.pug', '!custom-elements/**/_*.pug' ],
          sortBy: collectionSorter(['Overview'])
        },
        'Utilities': {
          pattern: 'utilities/**/*.pug',
          sortBy: collectionSorter(['Overview'])
        },
        'Templates': {
          pattern: 'templates/**/*.pug',
          sortBy: collectionSorter(['Overview'])
        }
      }))
      .use(metalsmithPug({
        doctype: 'html',
        gfm: true,
        smartypants: true,
        renderer: renderer,
        langPrefix: 'language-',
        highlight,
        filters: {
          example: (text, options) => {
            const lang = getLang(options.lang);

            return `
              <div class="m-example -mb--4">
                <ul class="a-tabs -base -small -border -mb--2">
                  <li class="-active"><a href="#">HTML</a></li>
                  <li><a href="#">Code</a></li>
                </ul>
                <div class="m-example__html">${text}</div>
                <div class="m-example__code -hidden">
                  ${highlightCode(text, lang)}
                </div>
              </div>`;
          },
          code: (text, options) => {
            const lang = getLang(options.lang);

            return highlightCode(text, lang);
          },
          stencilDoc: (text, options) => {
            return pug.renderFile(
              path.join(Paths.src.LAYOUTS, 'partials', 'stencilDoc.pug'),
              {name: options.name, data:stencilDoc}
            );
         }
        }
      }))
      .use(metalsmithPlugins.headings('h2'))
      .use(metalsmithPlugins.inlineSource())
      .use(metalsmithPlugins.permalinks())
      .use(metalsmithPlugins.rootPath())
      // metalsmith matadata will be loaded into the locals
      // parameter for the render function of the pug engine.
      .metadata({
        utils: pugUtils
      })
      .use(metalsmithPlugins.layouts({
        engine: 'pug',
        doctype: 'html',
        default: 'default.pug',
        pattern: '**/*.html',
        directory: Folders.src.LAYOUTS,
      }))
      .use(metalsmithPlugins.redirect({
        '/': './getting-started/'
      }))
      .build(error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
  });

  promise.then(() =>
    gulp.src(`${Folders.DIST}/**/*.html`)
  );

  return promise;
}

buildWebsiteViews.description = 'Builds pug documentation pages. Returns a promise.';

gulp.task('build:website:views', buildWebsiteViews);
