const path = require('path');
const webpack = require('webpack');
const cssnano = require('cssnano');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const paths = require('./paths');

module.exports = {
  entry: [
    path.join(paths.js, 'app.js'),
  ],
  output: {
    path: paths.dist,
    filename: 'app.bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(paths.dist),
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
    }),
    new ExtractTextPlugin('app.bundle.css'),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: cssnano,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg|eot|svg|ttf|woff|woff2)$/,
        use: [
          'file-loader?name=./assets/[hash].[ext]',
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
