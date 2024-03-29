/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./html/homepage.html'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-gradient': "url('./img/bg_gradient.png')",
        'sign': "url('./img/sign_bk.png')",
        'bg-gradient2': "url('./img/bg_gradient2.png')",
      }
    },
  },
  plugins: [],
}

