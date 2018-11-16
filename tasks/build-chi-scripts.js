import gulp from 'gulp';
import path from 'path';
import vinylNamed from 'vinyl-named';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import { Folders } from './constants';

const gulpPlugins = require('gulp-load-plugins')();
const sources = path.join(Folders.SRC, 'chi/javascript/index.js');
const destination = path.join(Folders.DIST, 'js');


const webpackConfig = {
  output: {
    library: 'chi',
    filename: 'chi.js'
    //libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
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

gulp.task('build:chi:scripts', () => gulp.src(sources)
  .pipe(gulpPlugins.plumber())
  .pipe(vinylNamed())
  .pipe(webpackStream(webpackConfig))
  .pipe(gulp.dest(destination))
  .pipe(gulpPlugins.connect.reload())
);
