const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const globalVariables = require('./globalVariables')
const globalVendors = require('./globalVendors')
const babelConfig = require('./babel-config')
const stylusConfig = require('./stylus-config')

const devConfig = env => ({
  entry: {
    main: [
      "@babel/polyfill",
      "webpack-hot-middleware/client",
      "./src/main.js"]
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: '/'
  },
  devServer : {
    contentBase: 'dist',
    hot: true,
    overlay: false,
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
    new webpack.HotModuleReplacementPlugin(),
    globalVariables,
    globalVendors
  ]
})

module.exports = devConfig()
