var ExtractText  = require('extract-text-webpack-plugin');
var StaticRender = require('static-render-webpack-plugin');
var webpack      = require('webpack');

var routes = [
  '/',
  '/about'
];

module.exports = {
  entry: './src/entry.js',

  output: {
    path: './dist/',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },

  devServer: {
    contentBase: './build/',
    historyApiFallback: true,
    port: 4000,
    hot: true
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
        loader: ExtractText.extract('css!cssnext')
      }
    ]
  },

  plugins: [
    new ExtractText('bundle.css'),
    new StaticRender('bundle.js', routes),
    new webpack.NoErrorsPlugin()
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
