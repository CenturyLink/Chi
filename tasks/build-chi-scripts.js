import gulp from 'gulp';
import path from 'path';
import plumber from 'gulp-plumber';
import vinylNamed from 'vinyl-named';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import { Folders, WEBPACK_MODE } from './constants';
import { KEYS } from '../src/chi/javascript/constants/constants';

const footer = require('gulp-footer');
const sources = path.join(Folders.SRC, 'chi/javascript/index.js');
const destination = path.join(Folders.DIST, 'js');
const copyright = `Chi and its documentation are released under the terms of the MIT license.
In addition, Chi uses several 3rd-party libraries,
a list of which can be viewed in the package.json file.
Please review each of their license and user agreements, as well.`;

const webpackConfig = {
  mode: WEBPACK_MODE,
  output: {
    library: 'chi',
    filename: 'chi.js',
    libraryTarget: 'window'
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

webpackConfig.plugins = [
  new webpack.BannerPlugin(copyright)
];

function buildChiScripts () {
  return gulp.src(sources)
    .pipe(plumber())
    .pipe(vinylNamed())
    .pipe(webpackStream(webpackConfig))
    .pipe(footer(`document.addEventListener('mousedown', function (e) { if (!document.body.classList.contains('-mouse-control')) { document.body.classList.add('-mouse-control'); } }); document.addEventListener('keyup', function (e) { if (e.keyCode === ${KEYS.TAB} && document.body.classList.contains('-mouse-control')) { document.body.classList.remove('-mouse-control'); } });`))
    .pipe(gulp.dest(destination));
}

buildChiScripts.description = 'Compiles Chi JavaScript library into ES5. ';

gulp.task('build:chi:scripts', buildChiScripts);
