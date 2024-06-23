/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,tsx}"
  ],
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
      boxShadow: {
        'inner-lg': 'inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), inset 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'blue-color': '10px 10px 30px 0px rgba(6,31,77,0.4)'

      },
    },
  },
  plugins: [require('daisyui')], 
};
