module.exports = {
  pages: {
    page1: 'src/page1.js',
    page2: 'src/page2.js',
    page3: 'src/page3.js',
  },

  // the following settings are not necessary to reproduce the issue, but make it easier to see what happened
  // with `git diff`:
  filenameHashing: false,
  configureWebpack: {
    optimization: {
      minimize: false
    },
  },
};