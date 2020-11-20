const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: config => {
    if (!config.externals) {
      config.externals = {};
    }
    if (config.devtool) {
      delete config.devtool;
    }

    switch (process.env.VUE_APP_MODE) {
      case 'prod':
        config.mode = 'production';
        config.optimization.minimize = true;
        const terserOptions = config.optimization.minimizer[0].options.terserOptions;
        terserOptions.compress.drop_console = true;
        terserOptions.compress.drop_debugger = true;
        terserOptions.keep_classnames = true;
        terserOptions.keep_fnames = true;
        break;

      case 'dev':
        config.mode = 'development';
        config.devtool = 'source-map';
        config.plugins.push(new BundleAnalyzerPlugin());
        config.output.filename = '[name].js';
        config.output.chunkFilename = '[name].js';
        config.externals.shell = 'shell';
        config.externals.vue = 'Vue';
        break;

      default:
    }
  },
  css: {
    extract: process.env.VUE_APP_MODE === 'prod',
  },
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
      // if aggregateTimeout and poll values should be changed on local, create a .env.local file
      aggregateTimeout: process.env.WEBPACK_AGGREGATE_TIMEOUT,
      poll: process.env.WEBPACK_POLL,
    },
    overlay: {
      warnings: true,
      errors: true,
    },
    public: 'localhost:9090',
    port: 9090,
    https: true,
  },
};
