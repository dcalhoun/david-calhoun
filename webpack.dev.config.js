'use strict'

require('babel-register')

var calc = require('postcss-calc')
var Copy = require('copy-webpack-plugin')
var customMedia = require('postcss-custom-media')
var customProps = require('postcss-custom-properties')
var path = require('path')
var paths = require('./src/shared/utils/paths.js')
var postcssImport = require('postcss-import')
var webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),

  output: {
    filename: 'client.bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css!postcss' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel!standard' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.md$/, loader: 'json!front-matter' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'config': {
        'env': JSON.stringify('dev')
      }
    }),
    new webpack.NoErrorsPlugin()
  ],

  standard: {
    parser: 'babel-eslint'
  },

  postcss: function () {
    return [postcssImport, customMedia, customProps, calc]
  }
}
