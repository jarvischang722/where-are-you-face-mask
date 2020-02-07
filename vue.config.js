const webpackBundleAnalyzer = require('webpack-bundle-analyzer');

module.exports = {
    chainWebpack: (config) => {
      config
        .plugin('webpack-bundle-analyzer')
        // eslint-disable-global-require
        .use(webpackBundleAnalyzer.BundleAnalyzerPlugin);
    },
  };
