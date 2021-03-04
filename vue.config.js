module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    port: '8080',
    open: false,
    proxy: {
      '/api': {
        // 比如说目标服务器的请求路径为 http://localhost:3000/list
        // 当前请求地址为 http://192.168.1.105:8080/api/list
        // 那么就会匹配 /api 的请求，将请求地址（http://192.168.1.105:8080）替换为target，就变成了 http://localhost:3000/api/list
        // pathRewrite会将路径中的 /api 替换成需要的 这里就替换成 http://localhost:3000/list
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      },
      '/icon': {
        target: 'https://cdn.jsdelivr.net',
        changeOrigin: true,
        pathRewrite: {'^/icon': ''}
      }
    }
  }
}
