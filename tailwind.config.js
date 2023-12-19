import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#01121A",
        darkOak: "#201922",
        mahogany: "#4F242E",
        velvet: "#672934",
        beige: "#CAB3B6",
        marble: "#F6F0F0",
      },
      fontFamily: {
        adventPro: "Advent Pro, sans-serif",
        shadows: "Shadows Into Light Two, cursive",
        zenMaru: "Zen Maru Gothic, sans-serif",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
