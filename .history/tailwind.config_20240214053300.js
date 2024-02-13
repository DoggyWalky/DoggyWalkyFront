/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#F4CC3D',
        lightBlue: '#6A8EA0',
        text: '#2E3B4B',
        blue: '#224F84',
        lightYello1: '#F6DE7A',
        lightYello2: '#F2D276',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
      },
      width: {
        introduceImg: '32rem',
        max_width: '1280px',
      },
    },
  },
  plugins: [],
};
