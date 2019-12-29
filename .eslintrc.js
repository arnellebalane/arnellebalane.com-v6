module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {},
  overrides: [
    {
      files: ['src/**/*.svelte'],
      processor: 'svelte3/svelte3',
      plugins: ['svelte3'],
      globals: {
        process: true
      }
    },
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
