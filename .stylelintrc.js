module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': false,
    'scss/at-rule-no-unknown': true,
  },
};
