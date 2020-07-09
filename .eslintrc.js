module.exports = {
  env: {
    browser: true,
    es6: true,
    serviceworker: true,
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-restricted-globals': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/first': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.svelte'],
      processor: 'svelte3/svelte3',
      plugins: ['svelte3'],
      globals: {
        process: true,
      },
    },
    {
      files: ['src/server.js', 'src/routes/api/**/*.js'],
      env: {
        node: true,
      },
    },
    {
      files: ['.eslintrc', '*.config.js'],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        'global-require': 'off',
      },
    },
  ],
};
