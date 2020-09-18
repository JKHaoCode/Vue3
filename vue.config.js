module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  css: {
    modules: false,
    loaderOptions: {
      sass: {
      },
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
};
