/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // sleduje všechny soubory v app/
    "./components/**/*.{js,ts,jsx,tsx}", // sleduje všechny soubory v components/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
