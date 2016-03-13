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
