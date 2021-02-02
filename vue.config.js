module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/storyDesign/'
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
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: '故事設計',
    },
  },
};
