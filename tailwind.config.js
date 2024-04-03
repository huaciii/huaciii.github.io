/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./html/hp.html'],
  theme: {
    extend: {
      backgroundImage: {
        'star-bk': "url('./img/star_bk.png')",
        'star-wh': "url('./img/star_wh.png')",
        'sign': "url('./img/sign.png')",
        'star-bg': "url('./img/bg_star.png')",
        'bg-icon': "url('./img/huaciii.png')",
        'lineptn': "url('./img/line.png')",
        'bg-gold': "url('./img/bg_gold.jpg')",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

