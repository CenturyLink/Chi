import gulp from 'gulp';
import vinylNamed from 'vinyl-named';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import { Folders } from './constants';

const gulpPlugins = require('gulp-load-plugins')();

const webpackConfig = {
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

gulp.task('build-scripts', () => gulp.src(`${Folders.src.SCRIPTS}/**/*.js`)
  .pipe(gulpPlugins.plumber())
  .pipe(vinylNamed())
  .pipe(webpackStream(webpackConfig))
  .pipe(gulp.dest(Folders.dist.SCRIPTS))
  .pipe(gulpPlugins.connect.reload())
);
