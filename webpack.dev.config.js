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
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
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
