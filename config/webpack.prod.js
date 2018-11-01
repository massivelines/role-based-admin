// Production Webpack Config

const webpack = require('webpack');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',

  optimization: {
    minimizer: [
      // some uglify options removed because wp4 automatically does them in production mode
      new UglifyJSPlugin({
        // if needed for debug, but slower build time
        // sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false,
            booleans: true,
            collapse_vars: true,
            conditionals: true,
            dead_code: true,
            drop_console: true,
            drop_debugger: true,
            loops: true,
            unused: true,
            warnings: false,
          },
        },
      }),
    ],
    runtimeChunk: false,
    splitChunks: {
      // Splits files into two files for each entry,
      // js: main.js (dev code), vendor.js (imported node modules)
      // css: main.css (all sass files, including imported sass files), vendor.js (only .css files that have been imported into sass)
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showproject the effect
          minSize: 0, // This is example is too small to create commons chunks
        },
        // https://medium.com/@hpux/webpack-4-in-production-how-make-your-life-easier-4d03e2e5b081
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
});