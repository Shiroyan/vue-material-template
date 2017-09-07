// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eqeqeq': 0,
    'prefer-const': 0,
    'prefer-arrow-callback': 0,
    'import/prefer-default-export': 0,
    'func-names': 0,
    'no-plusplus': 0,
    'no-mixed-operators': 0,
    'no-unused-vars': 0,
    'no-multi-assign': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'no-named-as-default': 0,
    'no-underscore-dangle': 0,
    'no-trailing-spaces': 0,
    'no-unused-expressions': 0,
    'no-undef': 0,
    'object-shorthand': 0,
  }
}
