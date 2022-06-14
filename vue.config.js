const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 关闭eslint
  lintOnSave: false,

  devServer: {
    // disableHostCheck: false,
    host: 'localhost',
    port: 8081,
    https: false,
    hot: false,
    proxy: null
  },
})
