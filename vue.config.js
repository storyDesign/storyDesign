module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/storyDesign/dist/'
    : '/',
  devServer: {
    open: true,
    host: 'localhost',
    port: '8080',
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 路径指向本地主机地址及端口号
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/data', // 路径转发代理
        },
      },
    },
  },
};
