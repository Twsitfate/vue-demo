module.exports = {
  //  eslint-loader 是否启用
  lintOnSave: false,
  // 选项...
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/production/' : '/'
}