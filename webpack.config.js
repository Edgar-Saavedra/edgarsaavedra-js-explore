const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: {
    Basics : './js/basics/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: "[name].js"
  },
  externals: {
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          cacheDirectory: true
        }
      }
    ]
  }
};

module.exports = config;