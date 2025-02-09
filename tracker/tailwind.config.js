/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      abc:["Roboto Slab", "serif"],
      light:["Poppins", "sans-serif"]
    }
  },
  plugins: [],
}