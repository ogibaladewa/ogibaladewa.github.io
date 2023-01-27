/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {},
    keyframes: {
      slideLeft: {
        '0%': { transform: 'translate(200px, 0px)' },
        '100%': { transform: 'translate(0px, 0px)' },
      },
      slideRight: {
        '0%': { transform: 'translate(-30px, 0px)' },
        '100%': { transform: 'translate(0px, 0px)' },
      },
      slideBottom: {
        '0%': { transform: 'translate(0px, -100px)' },
        '100%': { transform: 'translate(0px, 0px)' },
      },
      slideTop: {
        '0%': { transform: 'translate(0px, 100px)' },
        '100%': { transform: 'translate(0px, 0px)' },
      },
      buttonRise: {
        '0%': { transform: 'scale(1, 1)' },
        '50%': { transform: 'scale(1.2, 1.2)' },
        '100%': { transform: 'scale(1, 1)' },
      },
      hop: {
        '0%': { transform: 'translate(0px, 0px)' },
        '100%': { transform: 'translate(0px, 30px)' },
      }
  },
  animation: {
      slideLeft: 'slideLeft 3s ease-out 1',
      slideLeftMe: 'slideLeft 4s ease-in-out 1',
      slideRight: 'slideRight 1.5s ease-out 1',
      slideBottom: 'slideBottom 2s ease-out 1',
      slideTop: 'slideTop 4s ease-out 1',
      buttonRise: 'buttonRise 1.5s 3s ease-out 3',
      hop: 'hop 1.5s 5s ease-in-out infinite',
  },
  },
  plugins: [],
}
