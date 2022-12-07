module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 8'],
    },
    'postcss-pxtorem': {
      rootValue({ file }) {
        return 16;
      },
      unitPrecision: 2, //保留rem小数点多少位
      propList: ['*'],
      exclude: (e) => {
        // if (/src/.test(e)) {
        //   return false
        // }
        return true;
      },
    },
  },
};
