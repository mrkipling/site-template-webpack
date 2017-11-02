const path = require('path');

const paths = require('./paths');

const breakpoints = {
  xs: '544px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('autoprefixer'),
    require('postcss-easy-media-query')({ breakpoints }),
  ],
};
