// eslint-disable-next-line no-undef
module.exports = {
  settings: {
    react: {
      version: '18.2'
    }
  },
  env: {
    'browser': true,
    'es2021': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'indent': [
      'error',
      2
    ],
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'sort-imports': ['error', {
      'ignoreCase': false,
      'ignoreDeclarationSort': true,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'single', 'multiple'],
      'allowSeparatedGroups': false,
    }],
    'react/react-in-jsx-scope': 'off',
  }
}
