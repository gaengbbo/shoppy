/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#9e626a',
      },
      backgroundImage: {
        banner: `url('../public/image/banner.jpg')`
      }
    },
  },
  plugins: [],
}

