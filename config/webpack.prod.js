const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const miniCSSExtractPlugin = require('mini-css-extract-plugin')
const optimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
const compressionPlugin = require('compression-webpack-plugin')
const globalVariables = require('./globalVariables')
const babelConfig = require('./babel-config')
const stylusConfig = require('./stylus-config')

const prodConfig = env => ({
  entry: {
    main: ["@babel/polyfill", "./src/main.js"]
  },
  mode: "production",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      babelConfig,
      stylusConfig,
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.ejs',
      title: 'TED Analytics'
    }),
    new optimizeCSSAssets(),
    new miniCSSExtractPlugin({
      filename: '[name]-bundle-[hash:8].css'
    }),
    globalVariables,
    new compressionPlugin({
      algorithm: 'gzip'
    })
  ]
})

module.exports = prodConfig()
