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
        importLoaders: 1
      },
    },
    'postcss-loader',
    { 
      loader: 'stylus-loader', 
      options: {
        import: [
          path.resolve(__dirname, '../src/styles/config/variables.styl'),
          path.resolve(__dirname, '../src/styles/config/mixins.styl')
        ]
      }
    }
  ]
}
