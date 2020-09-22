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

  // chainWebpack: (config) => {
  //   const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
  //   types.forEach((type) => addStyleResource(config.module.rule('stylus').oneOf(type)));
  // },
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
