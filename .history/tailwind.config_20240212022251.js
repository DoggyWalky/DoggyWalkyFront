/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#F96162',
      },
      logoImage: {
        logo: `url('../public/images/logo.png')`,
      },
    },
  },
  plugins: [],
};
