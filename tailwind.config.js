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
        'pj2': "url('./img/index2.png')",
        'pj2wb': "url('./img/index2wb.png')",
        'bkmapgif': "url('./img/map.gif')",
        'bkmap': "url('./img/bakery_map.png')",
        'shopstep': "url('./img/shopping steps.png')",
        'bkcart1': "url('./img/add to cart.gif')",
        'bkcart2': "url('./img/add to cart2.gif')",
        'old_signflow': "url('./img/signupflow.png')",
        'am_before': "url('./img/am_before.png')",
        'am_after': "url('./img/am_after.png')",
        'ba_hp': "url('./img/ba_hp.png')",
        'pom': "url('./img/pj3.png')",
        'wamo': "url('./img/waseda-mockup.png')",
        'wahero': "url('./img/wahero.png')",
      },
      backgroundSize: {
        '80%': '80%',
      },
      colors: {
        'base': {
          DEFAULT: '#222222',
          fontdark: '#737272',
          fontlight: '#E1E1E1',
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
        'pj2': {
           
            500: '#CA007C',  
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

