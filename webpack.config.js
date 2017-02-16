'use strict';

var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
var argv = require('minimist')(process.argv.slice(2));

var config = {
  devtool: 'source-map',

  entry: {
    marketing: './src/apps/marketing.js',
    consumer: './src/apps/consumer.js',
    producer: './src/apps/producer.js',
    vendorJs: ["angular", "angular-route", "angular-ui-bootstrap","jquery"],
    vendorCss: './src/styles/vendor.style.less'
  },

  output: {
    path: path.join(__dirname, 'public/assets/'),
    filename: 'js/[name].bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.json'],
    root: __dirname,
    modulesDirectories: ['node_modules']
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new CopyWebpackPlugin([
      {from: './src/apps/consumer.html', to: './../user/'},
      {from: './src/apps/producer.html', to: './../publisher/'},
      {from: './src/images', to: './../assets/images/'}
    ])
  ],

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader?name=./css/[hash].[txt]")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader?name=./css/[hash].[txt]")
      }
    ]
  }
};

// if --production is passed, ng-annotate and uglify the code
if (argv.production) {
  console.info('This might take a while...');

  config.plugins.unshift(new webpack.optimize.UglifyJsPlugin({mangle: true}));
  config.plugins.unshift(new NgAnnotatePlugin({add: true}));
  config.plugins.unshift(new webpack.NoErrorsPlugin());
}

module.exports = config;
