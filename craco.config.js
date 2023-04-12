const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  vite: {
    plugins: {
      add: [new VanillaExtractPlugin()],
    },
  },
};
