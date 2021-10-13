module.exports = {
  development: {
    apiTarget: 'http://192.168.2.104:9999/api/',
    publicPath: '/',
    server: {}
  },
  production: {
    apiTarget: 'http://127.0.0.1:8081/',
    publicPath: 'https://12cang.oss-accelerate.aliyuncs.com/public/web/',
    server: {}
  },
  testing: {
    apiTarget: 'http://114.215.206.125/api/',
    server: {}
  }
}
