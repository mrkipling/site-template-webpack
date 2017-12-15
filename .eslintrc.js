module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: 'airbnb',
  rules: {
    'class-methods-use-this': 0,
    'func-names': 0,
    indent: [2, 2, { SwitchCase: 1 }],
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'max-len': 0,
    'new-cap': 0,
    'no-alert': 0,
    'no-underscore-dangle': 0,
    'prefer-template': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/no-danger': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
  },
};
