const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: colors,
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
