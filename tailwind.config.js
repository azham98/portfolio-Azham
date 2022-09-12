/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  // theme untuk override 
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
  //extend untuk buat class css sendiri
    extend: {
      colors: {
        primary: '#5FBB59',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
