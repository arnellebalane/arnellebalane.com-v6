module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['src/server.js', 'src/routes/api/**/*.js'],
      env: {
        node: true
      }
    },
    {
      files: ['.eslintrc', '*.config.js'],
      env: {
        node: true
      },
      parserOptions: {
        sourceType: 'script'
      }
    }
  ]
};
