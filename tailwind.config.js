/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./pages/**/*.{js,ts,tsx,jsx}",
    "./components/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dimmer': '#ffffff0d'
      }
    },
  },
  plugins: [],
}
