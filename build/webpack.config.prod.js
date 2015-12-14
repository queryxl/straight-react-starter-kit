var path              = require('path');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackDevConfig  = require('./webpack.config.dev');

webpackDevConfig.entry.app=[webpackDevConfig.entry.app[1]];

webpackDevConfig.devtool = 'source-map';

webpackDevConfig.plugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new ExtractTextPlugin('[name].[contenthash].css', {
    allChunks: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true
    },
    compressor: {
      warnings: false
    }
  }),
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '../src/index.html'),
    hash: false,
    filename: 'index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  })
];

module.exports = webpackDevConfig;
