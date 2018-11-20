module.exports = {
  presets: [
    // issue exists with the default vue preset:
    '@vue/app'
    // issue can be avoided by disabling the default polyfills:
    // ['@vue/app', {
    //   polyfills: [],
    // }]
  ]
}
