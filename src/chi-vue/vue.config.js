const path = require('path');
const ASSET_PATH = '/';

function PublicPathWebpackPlugin() {}

PublicPathWebpackPlugin.prototype.apply = function(compiler) {
  compiler.hooks.entryOption.tap('PublicPathWebpackPlugin', (context, entry) => {
    if (entry['module.common']) {
      entry['module.common'] = path.resolve(__dirname, './src/main.js');
    }
    if (entry['module.umd']) {
      entry['module.umd'] = path.resolve(__dirname, './src/main.js');
    }
    if (entry['module.umd.min']) {
      entry['module.umd.min'] = path.resolve(__dirname, './src/main.js');
    }
  });
  compiler.hooks.beforeRun.tap('PublicPathWebpackPlugin', compiler => {
    compiler.options.output.publicPath = ASSET_PATH;
  });
};
module.exports = {
  configureWebpack: config => {
    if (!config.externals) {
      config.externals = {};
    }
    if (config.devtool) {
      delete config.devtool;
    }

    config.output.filename = '[name].js';
    config.output.chunkFilename = '[name].js';

    switch (process.env.VUE_APP_MODE) {
      case 'prod':
        config.mode = 'production';
        config.optimization.minimize = true;
        config.plugins.unshift(new PublicPathWebpackPlugin());
        config.optimization.splitChunks = {
          maxSize: 90000,
        };
        break;

      case 'dev':
        config.mode = 'development';
        config.devtool = 'source-map';
        config.output.filename = '[name].js';
        config.output.chunkFilename = '[name].js';
        config.externals.vue = 'Vue';
        break;

      default:
    }
  },
  chainWebpack: config => {
    if (process.env.VUE_APP_MODE === 'prod') {
      config.optimization.minimizer('terser').tap(args => {
        args[0].terserOptions = {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
          keep_classnames: true,
          keep_fnames: true,
        };

        return args;
      });
    }
  },
  css: {
    extract: process.env.VUE_APP_MODE === 'prod',
  },
  devServer: {
    client: {
      progress: false,
      overlay: {
        warnings: true,
        errors: true,
      },
    },
    static: {
      watch: {
        ignored: /node_modules/,
        // if aggregateTimeout and poll values should be changed on local, create a .env.local file
        aggregateTimeout: process.env.WEBPACK_AGGREGATE_TIMEOUT,
      },
    },
    port: 9090,
    https: true,
  },
  transpileDependencies: ['vuex-module-decorators'],
};
