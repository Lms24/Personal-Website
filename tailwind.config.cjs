/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{html,js,svelte,ts,css}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
