import gulp from 'gulp';
import path from 'path';
import plumber from 'gulp-plumber';
import vinylNamed from 'vinyl-named';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import { Folders, WEBPACK_MODE } from './constants';

const sources = path.join(Folders.SRC, 'chi/javascript/index.js');
const destination = path.join(Folders.DIST, 'js');


const webpackConfig = {
  mode: WEBPACK_MODE,
  output: {
    library: 'chi',
    filename: 'chi.js'
    //libraryTarget: 'umd'
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

if (process.env.PRODUCTION) {
  webpackConfig.plugins = [new webpack.optimize.UglifyJsPlugin({
    comments: false,
    sourceMap: false,
    compress: {
      warnings: false,
      drop_console: false
    },
    exclude: [
      /node_modules\//
    ]
  })];
} else {
//  webpackConfig.devtool = 'eval';
  webpackConfig.plugins = [new webpack.SourceMapDevToolPlugin({
    filename: '[file].map',
    append: null,
    module: true,
    columns: true,
    lineToLine: false,
    noSources: false,
    namespace: ''
  })];
}

function buildChiScripts () {
  return gulp.src(sources)
    .pipe(plumber())
    .pipe(vinylNamed())
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest(destination));
}

buildChiScripts.description = 'Compiles Chi JavaScript library into ES5. ';

gulp.task('build:chi:scripts', buildChiScripts);
