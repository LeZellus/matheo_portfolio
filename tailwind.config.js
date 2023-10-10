/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        'darkgray': {
          DEFAULT: '#282828',
          50: '#E0E0E0',
          100: '#D5D5D5',
          200: '#C1C1C1',
          300: '#ADADAD',
          400: '#989898',
          500: '#848484',
          600: '#6F6F6F',
          700: '#5B5B5B',
          800: '#474747',
          900: '#323232',
          950: '#282828'
        },
      }
    },
  },
  plugins: [],
}

