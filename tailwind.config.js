const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        sans: ['"Inter Var"', '"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ['"Roboto Mono"', ...defaultTheme.fontFamily.mono]
      },
      spacing: {
        72: '18rem',
        80: '20rem'
      }
    }
  },
  variants: {},
  plugins: []
}
