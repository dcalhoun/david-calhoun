'use strict'

var calc = require('postcss-calc')
var customMedia = require('postcss-custom-media')
var customProps = require('postcss-custom-properties')
var ExtractText = require('extract-text-webpack-plugin')
var fs = require('fs')
var path = require('path')
var postcssImport = require('postcss-import')
var webpack = require('webpack')

module.exports = {
  entry: {
    'server.bundle': path.resolve(__dirname, 'server.js')
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist')
  },

  target: 'node',

  // Keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractText.extract('style', 'css!postcss')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0!standard'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.md$/,
        loader: 'json!front-matter'
      }
    ]
  },

  plugins: [
    new ExtractText('main.css'),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'config': {
        'env': JSON.stringify('server')
      }
    })
  ],

  postcss: function () {
    return [
      postcssImport,
      customMedia,
      customProps,
      calc
    ]
  }
}
