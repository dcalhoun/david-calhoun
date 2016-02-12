var calc          = require('postcss-calc');
var customMedia   = require('postcss-custom-media');
var customProps   = require('postcss-custom-properties');
var locals        = require('./src/data.js');
var postcssImport = require('postcss-import');
var webpack       = require('webpack');

module.exports = {
  entry: {
    'main': './src/entry.js'
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.jsx', '.js', '']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css/,
        loader: 'style!css!postcss'
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin()
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
