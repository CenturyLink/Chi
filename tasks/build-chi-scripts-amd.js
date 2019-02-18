import gulp from 'gulp';
import path from 'path';
import vinylNamed from 'vinyl-named';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';
import plumber from 'gulp-plumber';
import webpackStream from 'webpack-stream';
import { Folders } from './constants';

const sources = path.join(Folders.SRC, 'chi/javascript/index.js');
const destination = path.join(Folders.DIST, 'amd');


const webpackConfig = {
  output: {
    library: 'chi',
    filename: 'chi.js',
    libraryTarget: 'amd'
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
  },
  externals: {
    'popper.js': 'popper',
    'dayjs': 'dayjs'
  }
};

if (process.env.PRODUCTION) {
  webpackConfig.plugins = [new UglifyJsPlugin({
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

function buildChiScriptsAmd () {
  return gulp.src(sources)
    .pipe(plumber())
    .pipe(vinylNamed())
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest(destination));
}

buildChiScriptsAmd.description = 'Compiles Chi JavaScript library into an ' +
  'AMD ES5 module. Returns a stream. ';

gulp.task('build:chi:scriptsAMD', buildChiScriptsAmd);
