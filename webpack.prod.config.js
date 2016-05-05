var webpack = require('webpack'),
    path    = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var PROJECT_BASE = __dirname;

var webpackConfig = {
  name   : 'client',
  target : 'web',
  entry  : {
    app : [
      PROJECT_BASE + '/src/app.js'
    ],
    vendor : [
      'react',
      'redux',
      'react-redux'
    ]
  },
  output : {
    filename   : '[name]-[hash].js',
    path       : PROJECT_BASE + '/dist',
    publicPath : '/'
  },
  plugins : [
    new webpack.DefinePlugin({
      'process.env' : {
        'NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template : PROJECT_BASE + '/src/index.html',
      hash     : true,
      filename : 'index.html',
      inject   : 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].js')
  ],
  resolve : {
    extensions : ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.(js|jsx)$/,
        exclude : /node_modules/,
        loader  : 'babel',
        query   : {
          stage    : 0,
          optional : ['runtime']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};

module.exports = webpackConfig;
