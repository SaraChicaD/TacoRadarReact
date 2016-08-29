var path = require('path');
var webpack = require('webpack');
var env = require('./env.json');


module.exports = {
  devtool: 'eval',
  entry: "./src/index.js",
  // entry: [
  //   'webpack-dev-server/client?http://localhost:3000',
  //   'webpack/hot/only-dev-server',
  //   './src/index'
  // ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      },
      'yelpApp_id': `'${env.app_id}'`,
      'yelpApp_secret': `'${env.app_secret}'`
    }),

  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
      //loaders: ["react-hot", 'babel-loader'],
      //query: {
      //    presets : ['es2015', 'react']
      //}
    }]
  }
};
