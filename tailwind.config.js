/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ajustalo según tu estructura
  ],
  theme: {
    extend: {
      colors: {
        mousiteca: {
          lavender: "#9386BE",
          sky: "#65C7EF",
          light: "#F0F2F7",
          dark: "#231916",
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        display: ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
