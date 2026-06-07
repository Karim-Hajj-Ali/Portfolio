/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bricolage)'],
        body:    ['var(--font-dm-sans)'],
      },
    },
  },
  plugins: [],
}
