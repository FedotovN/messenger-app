const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.NODE_ENV === 'production'
  ? 'messenger-app'
  : '/'
})
