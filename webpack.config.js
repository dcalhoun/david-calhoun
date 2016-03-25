'use strict';

require('babel-register');

var calc          = require('postcss-calc');
var Copy          = require('copy-webpack-plugin');
var customMedia   = require('postcss-custom-media');
var customProps   = require('postcss-custom-properties');
var paths         = require('./src/shared/utils/paths.js');
var ExtractText   = require('extract-text-webpack-plugin');
var path          = require('path');
var postcssImport = require('postcss-import');
var StaticSite    = require('static-site-generator-webpack-plugin');
var webpack       = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    'main': './index.js'
  },

  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: path.join(__dirname, '/dist')
  },

  resolve: {
    extensions: ['.js', '']
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
    new Copy([
      {from: '.nojekyll'},
      {from: '*.txt'},
      {from: '*.png'},
      {from: 'CNAME'}
    ]),
    new ExtractText('main.css'),
    new StaticSite('main.js', paths.routes),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'config': {
        'env': JSON.stringify('prod')
      }
    })
  ],

  postcss: function() {
    return [
      postcssImport,
      customMedia,
      customProps,
      calc
    ]
  },

  standard: {
    parser: 'babel-eslint'
  }
};
