// import webpack from 'webpack'
const webpack = require('webpack')

const globalVendors = new webpack.ProvidePlugin({
    React: 'react'
})

module.exports = globalVendors