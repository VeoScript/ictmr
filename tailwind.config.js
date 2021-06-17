const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bright-white': '#F4F9FF',   //PANTONE 11-0601 TCX
        'panther': '#25282A',        //PANTONE 426 C
        'light-panther': '#2F3438',
        'cool-gray': '#888B8D',      //PANTONE COOL GRAY 8 C
        'cerulean': '#00A3E1',       //PANTONE 2191 C
        'scarlet': '#F8485E'         //PANTONE 1785 C
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  variants: {
    opacity: ['disabled'],
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ],
}
