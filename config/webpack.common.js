// Common Webpack Config

// Common file that is imported into prod and dev webpack files
// Contains common rules and plugins that are shared

const webpack = require('webpack');
const path = require('path');
const WebpackBar = require('webpackbar');

// Simplifies creation of HTML files to serve your webpack bundles
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// process.cwd used to get root of web
const SRC_DIR = path.resolve(__dirname, '../src');
const OUT_DIR = path.resolve(__dirname, '../dist');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.tsx'),
  // entry: [
  //   path.resolve(SRC_DIR, 'index.tsx'),
  //   path.resolve(SRC_DIR, 'scss', 'main.scss'),
  // ],

  output: {
    path: OUT_DIR,
    filename: 'js/[name].js',
    // filename: 'bundle.js',
    publicPath: '/',
    // Temp fix: Issue with webpack 4, might not be fix until 5, workaround for hot reloading
    // https://github.com/webpack/webpack/issues/6642
    globalObject: 'this',
  },

  resolve: {
    modules: [SRC_DIR, 'node_modules'],
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },

      {
        test: /\.(jpg|svg|ico|gif|png)$/,
        use: 'file-loader?name=[path][name].[ext]',
      },
    ],
  },

  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new WebpackBar(),
    // new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),
  ],
};
