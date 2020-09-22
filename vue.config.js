module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  css: {
    // requireModuleExtension: false,
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
  // title: 'bbs',
  // name: 'Vue3App',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      // console.log(args);
      const params = args;
      params[0].title = 'Vue3Appbbs';
      return params;
    });
  },
};

// function addStyleResource(rule) {
//   rule.use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [
//         path.resolve(__dirname, './src/styles/imports.styl'),
//       ],
//     });
// }
