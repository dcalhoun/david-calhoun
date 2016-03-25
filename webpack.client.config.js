'use strict';

var calc          = require('postcss-calc');
var customMedia   = require('postcss-custom-media');
var customProps   = require('postcss-custom-properties');
var path          = require('path');
var postcssImport = require('postcss-import');
var webpack       = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    'main': './index.js'
  },

  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: path.join(__dirname, '/dist'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '']
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
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
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'config': {
        'env': JSON.stringify('client')
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
