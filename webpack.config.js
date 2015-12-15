var ExtractText  = require('extract-text-webpack-plugin');
var StaticRender = require('static-render-webpack-plugin');

var routes = [
  '/',
  '/about'
];

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: './dist/',
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
        loader: ExtractText.extract('css!cssnext')
      }
    ]
  },

  plugins: [
    new ExtractText('bundle.css'),
    new StaticRender('bundle.js', routes)
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
