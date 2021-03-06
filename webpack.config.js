module.exports = {
  entry: {
    app:[__dirname + '/src/index'],
    vendor: [
      'redux',
      'react-redux',
      'react-router',
      'react-router-redux'
    ],
    react: [
      'react',
      'react-dom'
    ],
    lodash: 'lodash',
    common: [
      'bluebird'
    ]
  },
  resolve: {
    root: [
      __dirname + '/src',
      __dirname + '/node_modules',
      __dirname,
    ],
    extensions: ['','.js'],
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        loaders: ['style','css'],
        include: /components/,
      }, {
        test: /\.(jpe?g|png|svg|ico)/i,
        loader: 'file?name=img_[hash:8].[ext]',
      }, {
        test: /\.(ttf|eot|woff|woff2)/,
        loader: 'file',
      }, {
        test: /\.(pdf)/,
        loader: 'file',
      }, {
        test: /\.(swf|xap)/,
        loader: 'file',
    }],
  }
};