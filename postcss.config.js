const PurgeSvelte = require('purgecss-from-svelte');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('tailwindcss'),
    prod && require('@fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.html',
        './src/**/*.svelte'
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      extractors: [
        {
          extractor: PurgeSvelte,
          extensions: ['svelte']
        }
      ]
    })
  ]
};
