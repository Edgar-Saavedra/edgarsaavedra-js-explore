const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: {
    Basics : './js/basics/index.js',
    DesignPatterns :'./js/designPatterns/index.js',
    ES6 : './js/ES6/index.js',
    Sorting : './js/sorting/index.js'
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
          presets: [["env", {
            "targets": {
              "browsers": ["last 10 versions", "safari >= 7",'ie 6-8']
            }
          }]],
          //presets: ['es2015'],
          cacheDirectory: true
        }
      }
    ]
  }
};

module.exports = config;