import fs from 'fs';
import path from 'path';
import gulp from 'gulp';

const plugins = require('gulp-load-plugins')();
const componentsFolder = path.join(__dirname, '..', 'src', 'css', 'components');
const foundationFolders = [
  'reset',
  'colors',
  'typography'
].map(item =>
  path.join(__dirname, '..', 'src', 'css', 'foundations', item));

function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter(file => fs.statSync(path.join(dir, file)).isDirectory());
}

function getComponentNamesToInclude(names) {
  let components = getFolders(componentsFolder);

  if (names.indexOf('all') === -1) {
    components = components.filter(file => names.indexOf(file) !== -1);
  }

  return components;
}

export function buildCss({ names = ['all'], dest = 'dist' }) {
  const componentFolders = getComponentNamesToInclude(names)
    .map(name => `${path.join(componentsFolder, name)}`);

  return gulp.src(
    foundationFolders
      .concat(componentFolders)
      .map(folder => `${path.join(folder, '*.scss')}`)
      .concat(`!${path.join(componentsFolder, '*.scss')}`)
  )
    .pipe(plugins.plumber())
    .pipe(plugins.sass({
      includePaths: [
        'node_modules',
        path.join(__dirname, '..', 'src', 'css')
      ],
      outputstyle: 'expanded'
    }))
    .pipe(plugins.postcss([
      require('autoprefixer')({
        browsers: ['last 2 versions', 'ie >= 10']
      }),
      require('cssnano')({
        preset: ['default', {
          discardComments: {
            removeAll: true
          }
        }]
      })
    ]))
    .pipe(plugins.concat('chi.css'))
    .pipe(gulp.dest(dest));
}

export function copyAssets({ names = ['all'], dest = 'dist' }) {
  const componentFolders = getComponentNamesToInclude(names)
    .map(name => `${path.join(componentsFolder, name)}`);

  return gulp.src(
    foundationFolders.concat(componentFolders)
      .map(folder => `${path.join(folder, '**', '!(*.scss)')}`)
  )
    .pipe(gulp.dest(dest));
}

export function chi({ names = ['all'], dest = 'dist' }) {
  buildCss({ names, dest });
  copyAssets({ names, dest });
}
