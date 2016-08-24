var webpack = require('webpack');
var merge = require('@ersinfotech/merge');
var ExtracTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackConfig = require('./webpack.config');

process.env.NODE_ENV = 'production';

modul.exports = merge(WebpackConfig, {
  //入口文件输出配置
  output: {
    path: __dirname + '/_dist/bidding/',
    filename: '[name]_[hash:8].js',
    chunkFilename: '[name]_[chunkhash:8].js',
    publicPath: '/wechat/bidding/'
  },
  //模块
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      exclude: /components/,
    }],
  },
  //插件项
  plugins: [
    new ExtractTextPlugin('[name]_[contenthash:8].css', {
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,  // remove all comments
      },
      compress: {
        warnings: false,
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new HtmlWebpackPlugin({
      filename: 'bidding.ejs',
      template: __dirname + '/src/index.prod.html',
      favicon: __dirname + '/src/favicon.ico',
      inject: false,
      minify: {
        html5: true,
        collapseWhitespace: true,
        // conservativeCollapse: true,
        removeComments: true,
        removeTagWhitespace: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: [
        'vendor',
        'react',
        'lodash',
        'common'
      ],
      minChunks: Infinity,
    }),
    new webpack.optimize.DedupePlugin()
  ],
});