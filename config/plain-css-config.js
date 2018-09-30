const miniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {
  console.log(env)
  return {
    test: /.css$/,
    include: /src/,
    use: [
      (enn.ENV === 'production') miniCSSExtractPlugin() ? 'style-loader',
      'style-loader',
      'css-loader'
    ]
  }
}
