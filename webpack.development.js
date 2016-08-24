var webpack = require('webpack');
var merge = require('@ersinfotech/merge');
var webpackConfig = require('./webpack.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = merge(webpackConfig, {
  devtool: 'eval',
  debug: true,
  //页面入口文件配置
  entry: {
    app: ['webpack-hot-middleware/client'],
  },
  //入口文件输出配置
  output: {
    path: __dirname + '/_dist/bidding/',
    filename: '[name]_[hash:8].js',
    chunkFilename: '[name]_[chunkhash:8].js',
  },
  module: {
    //加载器配置
    loaders: [{
      test: /\.css$/,
      loaders: ['style','css'],
      exclude: /components/,
    }],
  },
  //插件项
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      // favicon: __dirname + '/src/favicon.ico',
      inject: true,
    }),
  ],
});