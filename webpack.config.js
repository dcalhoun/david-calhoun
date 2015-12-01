var StaticSite = require('static-site-generator-webpack-plugin');
var data       = require('./data');

module.exports = {
  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  },

  plugins: [
    new StaticSite('bundle.js', data.routes, data)
  ]
}
