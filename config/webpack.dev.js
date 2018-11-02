// Development Webpack Config

const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

// plugin that runs typescript type checker on a separate process
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const common = require('./webpack.common.js');

const OUT_DIR = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
  mode: 'development',

  // output: {
    path: OUT_DIR,
    filename: 'js/[name].js',
    publicPath: '/',
  //   // Temp fix: Issue with webpack 4, might not be fix until 5, workaround for hot reloading
  //   // https://github.com/webpack/webpack/issues/6642
  //   globalObject: 'this',
  // },

//   if comments needed change to 'source-map'
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    open: true,
    overlay: true,
    stats: 'normal',
    clientLogLevel: 'error',
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      // fix for navigation in sass source-maps will be after sass-loader 2.0,
      // currently work with clicking inspector styles link, 2.0 will add better support under sources
      // https://github.com/webpack-contrib/css-loader/issues/652#issuecomment-411499701
      {
        test: /\.(sass|scss|css)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      // Used for mock data with graphql-tools
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },

      {
          test: /\.(jpg|svg|ico|gif|png)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
    ],
  },

  // More optimization settings
  // https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev'),
      },
    }),
  ],
});