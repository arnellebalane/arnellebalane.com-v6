const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Var"', '"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ['"Roboto Mono"', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  variants: {},
  plugins: []
}
