const PurgeSvelte = require('purgecss-from-svelte');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('tailwindcss'),
    prod &&
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.html', './src/**/*.svelte'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        extractors: [
          {
            extractor: PurgeSvelte,
            extensions: ['svelte']
          }
        ],
        // Since the article contents are fetched from the articles data,
        // PurgeCSS doesn't know beforehand which selectors are available and
        // might unexpectecly remove some used selectors. So we whitelist all
        // styles for the article detail page.
        whitelistPatternsChildren: [/article/]
      })
  ]
};
