const { useBabelRc, override } = require('customize-cra');

const addWebpackModules = (config) => {
  config?.plugins.push({
    module: {
      rules: [{ test: /\.png$/, use: 'url-loader?mimetype=image/png' }],
    },
  });

  return config;
};

module.exports = {
  webpack: override(addWebpackModules(), useBabelRc()),
};
