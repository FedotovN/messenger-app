const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/messenger-app'
  : '/'
})
