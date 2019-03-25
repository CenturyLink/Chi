import gulp from 'gulp';
import vinylNamed from 'vinyl-named';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import plumber from 'gulp-plumber';
import {Folders, WEBPACK_MODE} from './constants';

const webpackConfig = {
  mode: WEBPACK_MODE,
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [
          Folders.src.SCRIPTS
        ],
        exclude: /(\/node_modules\/$)/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      }
    ]
  }
};

if (process.env.PRODUCTION) {
  webpackConfig.plugins = [new webpack.optimize.UglifyJsPlugin({
    comments: false,
    sourceMap: true,
    compress: {
        warnings: false,
        drop_console: false
    },
    exclude: [
        /node_modules\//
    ]
  })];
} else {
  webpackConfig.devtool = 'eval';
}

function buildWebsiteScripts() {
  return gulp.src('src/website/assets/scripts/**/*.js')
    .pipe(plumber())
    .pipe(vinylNamed())
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('dist/assets/scripts'));
}

buildWebsiteScripts.description = 'Compiles Chi JavaScript library into ES6. ' +
  'Returns a stream. ';


gulp.task('build:website:scripts', buildWebsiteScripts);
