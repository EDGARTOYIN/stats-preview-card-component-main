/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue':'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'transparent-white-200': 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily: {
        'default-ff': ['Inter', 'sans-serif;'],
        'secondary-ff': ['Lexend Deca', 'sans-serif']
      },
      backgroundColor:{
        'sv': 'hsl(277, 68%, 38%)',
      }
    },
  },
  plugins: [],
}

