/**
 * Webpack configuration for
 * PRODUCTION
 */

const path = require('path');
const webpack = require('webpack');

const paths = require('./paths');
const config = {
  module: require('./webpack.config.module'),
  plugins: require('./webpack.config.plugins'),
};

module.exports = {
  entry: [
    path.join(paths.js, 'app.js'),
  ],
  output: {
    path: paths.dist,
    filename: 'app.bundle.js',
  },
  plugins: config.plugins.prod,
  module: config.module.prod,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
