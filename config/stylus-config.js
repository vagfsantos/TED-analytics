const miniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  test: /\.styl$/,
  include: /src/,
  use: [
    process.env.production ? miniCSSExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[name]__[hash:base64:8]',
        importLoaders: 1
      },
    },
    'postcss-loader',
    { 
      loader: 'stylus-loader', 
      // options: {
        // 'include css': true,
        // preferPathResolver: 'webpack',
        // import: [
          // '../styles/config/variables.styl',
          // '/var/www/html/TED-analytics/src/styles/config/variables.styl'
          // path.resolve(__dirname, '../styles/config/variables.styl')
          // path.resolve(__dirname)
        // ],
        // paths: ['../styles/config/variables.styl']
      // }
    }
  ]
}
