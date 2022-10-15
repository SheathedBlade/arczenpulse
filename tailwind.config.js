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
                lightModeBG:
                    "linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('~/public/station.gif')"
            },
            fontFamily: {
                adventPro: ['Advent Pro', 'sans-serif'],
                shadows: ['Shadows Into Light Two', 'cursive'],
                zenMaru: ['Zen Maru Gothic', 'sans-serif']
            },
            padding: {
                break: '0.15rem'
            },
            transitionDuration: {
                short: '0.2s'
            }
        }
    },
    plugins: []
}
