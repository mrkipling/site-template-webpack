/**
 * Webpack configuration for
 * DEVELOPMENT
 */

const path = require('path');

const paths = require('./paths');
const config = {
  module: require('./webpack.config.module'),
  plugins: require('./webpack.config.plugins'),
};

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.join(paths.js, 'app.js'),
  ],
  output: {
    path: paths.dist,
    filename: 'app.bundle.js',
  },
  devServer: {
    hot: true,
  },
  plugins: config.plugins.dev,
  module: config.module.dev,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
