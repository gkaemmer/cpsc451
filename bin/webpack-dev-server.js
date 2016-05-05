var path             = require('path'),
    chalk            = require('chalk'),
    webpack          = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig    = require('../webpack.dev.config');

var server = new WebpackDevServer(webpack(webpackConfig), {
  contentBase : path.resolve(__dirname, '/../src'),
  hot    : true,
  quiet  : false,
  noInfo : false,
  lazy   : false,
  stats  : {
    colors : true
  },
  historyApiFallback : true
});

server.listen(process.env.PORT, 'localhost', function () {
  console.log(chalk.green(
    'webpack-dev-server is now running at localhost:' + process.env.PORT
  ));
});
