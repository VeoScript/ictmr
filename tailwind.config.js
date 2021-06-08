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
        'drip-black': '#222',
        'drip-heaven': '#FBFBFB',
        'drip-mystery': '#020F14',
        'drip-night': '#112430',
        'drip-cerulean': '#037AC8',
        'drip-sky': '#4BAAD9',
        'drip-slate': '#1E3649',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  variants: {
    opacity: ['disabled'],
  },
  plugins: [],
}
