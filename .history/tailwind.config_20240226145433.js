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
        lightYellow: '#F6DE7A',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
        ExPost: `url('../public/images/ExPost.jpg')`,
      },
      width: {
        introduceImg: '32rem',
        max_width: '1280px',
      },
      height: {
        newProduct: '80vh',
      },
    },
  },
  plugins: [require('daisyui')],
};
