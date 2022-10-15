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
                    "linear-gradient(0deg, rgba(70,0,0,0.3), rgba(0,0,0,0)), url('~/public/chillhop_cafe.jpg')",
                lightModeBG:
                    "linear-gradient(0deg, rgba(70,0,0,0.3), rgba(0,0,0,0)), url('~/public/cozy_night.png')"
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
