require('babel-register');

var calc          = require('postcss-calc');
var Copy          = require('copy-webpack-plugin');
var customMedia   = require('postcss-custom-media');
var customProps   = require('postcss-custom-properties');
var data          = require('./src/data.js');
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
    extensions: ['.jsx', '.js', '']
  },

  module: {
    loaders: [
      {
        test: /\.css/,
        loader: 'css!postcss'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.json/,
        loader: 'json'
      },
      {
        test: /\.md$/,
        loader: 'json!front-matter'
      }
    ]
  },

  plugins: [
    new StaticSite('main.js', data.routes, data),
    new webpack.NoErrorsPlugin(),
    new Copy([
      {from: '.nojekyll'},
      {from: '*.txt'},
      {from: '*.png'},
      {from: 'CNAME'}
    ])
  ],

  postcss: function() {
    return [
      postcssImport,
      customMedia,
      customProps,
      calc
    ]
  }
};
