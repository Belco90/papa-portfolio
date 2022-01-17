const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: colors.teal,
      },
      fontFamily: {
        sans: '"Lato", sans-serif',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
