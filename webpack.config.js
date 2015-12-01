var StaticRender = require('static-render-webpack-plugin');
var data         = require('./data');

var routes = [
  '/',
  '/about'
];

module.exports = {
  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
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
      }
    ]
  },

  plugins: [
    new StaticRender('bundle.js', routes)
  ]
}
