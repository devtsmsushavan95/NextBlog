/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#05539A',
        dark: '#000911',
        para: '#536575',
        border: '#BFCDDA',
        light: '#E4EAF0'
      }
    },
  },
  plugins: [],
}
