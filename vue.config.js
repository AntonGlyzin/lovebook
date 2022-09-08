const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // outputDir: process.env.NODE_ENV === 'production' ? 'dist/lovebook' : 'dist/',
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
})
