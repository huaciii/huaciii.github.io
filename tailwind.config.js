/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./pj-1.html','./pj-2.html','./pj-1-2.html', './pj-1 copy.html'],
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
        'iconB': "url('./img/icon_B.png')",
        'iconC': "url('./img/icon_C.png')",
        'hp_before': "url('./img/mock_before.png')",
        'hp_after': "url('./img/mock_after.png')",
        'hp_before2': "url('./img/mock_before2.png')",
        'hp_after2': "url('./img/mock_after2.png')",
        'set_after': "url('./img/af_dash_home.png')",
        'set_before': "url('./img/be_dash_home.png')",
        'camera_set_before': "url('./img/be_dash_camera.png')",
        'camera_set_after': "url('./img/af_dash_camera.png')",
        'log_after': "url('./img/am_after.png')",
        'log_before': "url('./img/am_before.png')",
      },
      backgroundSize: {
        '80%': '80%',
      },
      colors: {
        'primary': {
          300: '#f23030',
          500: '#a61717',
        },
        'pj2': {
          500: '#ca007c',
        },
        'base': {
          'bgdark': '#171717',
          'bglight': '#cacaca',
          'bgme': '#202020',
          'brd': '#2b2b2b',
          'btn': '#5c5c5c',
          'fontdark': '#737272',
          'fontlight': '#e1e1e1',
        },
      },
      fontFamily: {
        'subt': ['Pixelify Sans'],
      },
    },
  },
  plugins: [],
}

