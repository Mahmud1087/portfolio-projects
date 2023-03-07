/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    colors: {
      light: {
        100: '#FFFFFF',
        200: '#FAFAFA',
        300: '#F1F1F1',
      },
      dark: {
        100: '#101010',
        200: '#000000',
      },
      c_orange: {
        100: '#FBAF85',
        200: '#D87D4A',
      },
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
