/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,tsx,jsx}',
        './components/**/*.{js,ts,tsx,jsx}'
    ],
    purge: [
        './pages/**/*.{js,ts,tsx,jsx}',
        './components/**/*.{js,ts,tsx,jsx}'
    ],
    darkMode: 'class', // or'media' or 'class'
    theme: {
        extend: {
            colors: {
                cream: '#FFDFBD',
                wood: '#460B0B'
            },
            backgroundImage: {
                darkModeBG:
                    "linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05)), url('~/public/overpass.gif')",
                lightModeBG: "url('~/public/station.gif')"
            },
            fontFamily: {
                titillium: ['Titillium Web', 'sans-serif'],
                adventProHeader: ['Advent Pro', 'sans-serif']
            }
        }
    },
    plugins: []
}
