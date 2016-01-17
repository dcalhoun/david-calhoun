var ExtractText = require('extract-text-webpack-plugin');
var locals      = require('./src/data.js');
var StaticSite  = require('static-site-generator-webpack-plugin');
var webpack     = require('webpack');

module.exports = {
  entry: {
    'main': './src/entry.js'
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css/,
        loader: ExtractText.extract('style', 'css!cssnext')
      }
    ]
  },

  plugins: [
    new ExtractText('bundle.css'),
    new StaticSite('main', locals.paths, locals),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'config': {
        'env': JSON.stringify('prod')
      }
    })
  ],

  cssnext: {
    compress: true,
    features: {
      rem: false,
      pseudoElements: false,
      colorRgba: false
    }
  }
};
