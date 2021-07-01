const colors = require('tailwindcss/colors')
const { useColor } = require('postcss-themewind/utils')

module.exports = {
  purge: {
    enabled: true,
    layers: ['components', 'utilities'],
    content: ['./index.html'],
  },
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      ...colors,
    },
    extend: {
      colors: {
        brand: {
          primary: useColor('--brand-primary'),
          secondary: useColor('--brand-secondary'),
        },
      },
      textColor: {
        primary: useColor('--text-primary'),
        secondary: useColor('--text-secondary'),
        inverted: useColor('--text-inverted'),
      },
      backgroundColor: {
        primary: useColor('--bg-primary'),
        secondary: useColor('--bg-secondary'),
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
