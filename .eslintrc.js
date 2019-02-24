module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    'babel'
  ],
  rules: {
    'babel/semi': 1,
  },
};
