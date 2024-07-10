/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./pj-1.html','./pj-2.html'],
  theme: {
    extend: {
      backgroundImage: {
        'star-bk': "url('./img/star_bk.png')",
        'star-wh': "url('./img/star_wh.png')",
        'sign': "url('./img/sign.png')",
        'sunturn': "url('./img/pfhero_t.png')",
        'sun': "url('./img/pfhero.png')",
        'bg-bk': "url('./img/bg_bk.png')",
        'heromockup': "url('./img/mockup.png')",
        'macmockup': "url('./img/macmockup.png')",
        'allsm': "url('./img/allsm.gif')",
        'allpc': "url('./img/allpc.gif')",
        'smmockup': "url('./img/sm.png')",
        'sm3mockup': "url('./img/sm3.png')",
        'parts': "url('./img/parts.png')",
        'portwb': "url('./img/indexwb.png')",
        'portcl': "url('./img/indexcl.png')",
      },
      backgroundSize: {
        '80%': '80%',
      },
      colors: {
        'base': {
          DEFAULT: '#222222',
          fontdark: '#737272',
          fontlight: '#BCBCBC',
          bglight: '#cacaca',
          bgme: '#202020',
          bgdark: '#171717',
          btn: '#5C5C5C',
          brd: '#2b2b2b',
        },
        'primary': {
          100: '#F29494',
          300: '#F23030',
          'text': '#897373',
          500: '#A61717',
          800: '#210000',
         
        },
        
      },
      fontFamily: {
         'subt': ['Pixelify Sans'],
       },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    
  ],
}

