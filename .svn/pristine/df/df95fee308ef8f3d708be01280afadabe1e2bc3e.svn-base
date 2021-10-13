const path = require('path')
const env = require('./env.js')[process.env.NODE_ENV]
// const ThreeExamples = require('import-three-examples')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('modules', resolve('src/modules'))
      .set('components', resolve('src/components'))
      .set('helper', resolve('src/helper'))
      .set('pages', resolve('src/pages'))
      .set('static', resolve('src/static'))
      .set('assets', resolve('src/assets'))
  },
  devServer: {
    // 运行端口 默认 60023
    port: 8080,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    // 转发
    proxy: {
      '/api': {
        target: 'http://192.168.2.104:9999',
        // target: 'http://youth-info.xicp.net:18758',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
    // disableHostCheck: true
  },
  publicPath: '',
  productionSourceMap: false,
  // 第三方插件配置
  // pluginOptions: {
  //   // ...
  //   ...ThreeExamples
  // }
}
