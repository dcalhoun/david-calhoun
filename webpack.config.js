'use strict'

require('babel-register')

var calc = require('postcss-calc')
var customMedia = require('postcss-custom-media')
var customProps = require('postcss-custom-properties')
var ExtractText = require('extract-text-webpack-plugin')
var path = require('path')
var paths = require('./src/shared/utils/paths.js')
var postcssImport = require('postcss-import')
var StaticSite = require('static-site-generator-webpack-plugin')
var webpack = require('webpack')
var env = process.env.NODE_ENV || 'dev'

var config = {
  entry: path.join(__dirname, 'src/index.js'),

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel!standard' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.md$/, loader: 'json!front-matter' }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'config': {
        'env': JSON.stringify(env)
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

if (env === 'prod' || env === 'static') {
  config.output = {
    filename: 'static.bundle.js',
    path: path.join(__dirname, '/dist'),
    libraryTarget: 'umd'
  }
  config.module.loaders.push(
    { test: /\.css$/, loader: ExtractText.extract('style', 'css!postcss') }
  )
  config.plugins.push(
    new ExtractText('bundle.css'),
    new StaticSite('static.bundle.js', paths.routes)
  )
}

if (env === 'dev') {
  config.output = {
    filename: 'client.bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/'
  }
  config.module.loaders.push({ test: /\.css$/, loader: 'style!css!postcss' })
  config.devServer = { contentBase: 'dist/' }
}

module.exports = config
