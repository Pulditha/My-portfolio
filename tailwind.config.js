/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",],
  theme: {
    extend: {
      fontFamily:{
        'Pacifico':['Pacifico','cursive'],
        'Anton':['Anton SC','cursive'],
      },
      colors: {
        customOrange: '#FF7700', 
        customBrown: '#6B4F4F',
        customDarkblue: '#293374',
        customBlue:'#202A6B',
      },
    },
  },
  plugins: [],
}

