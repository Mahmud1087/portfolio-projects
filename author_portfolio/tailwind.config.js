/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        chelsea: 'Chelsea Market',
        lilita: 'Lilita One',
        lato: 'Lato',
        poppins: 'Poppins',
      },
      backgroundImage: {
        heroBg: "url('./src/assets/heroBg.jpg')",
        reviewBg: "url('./src/assets/reviewImg1.jpg')",
      },
    },
  },
  plugins: [],
};
