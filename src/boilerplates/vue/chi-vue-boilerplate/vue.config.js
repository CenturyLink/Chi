const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    configureWebpack: config => {
      if (!config.externals) {
        config.externals = {};
      }

      config.output.filename = '[name].js';
      config.output.chunkFilename = '[name].js';

      let plugins = [{ from: '@centurylink/chi-vue/dist' }];
      config.plugins.push(
        new CopyWebpackPlugin(plugins, {
          context: 'node_modules',
          ignore: ['.DS_Store'],
        }));
    },
  };
