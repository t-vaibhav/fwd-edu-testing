/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'molengo': ['Molengo', 'sans-serif'],
      },

      backgroundImage: {
        'hero': "url('C:/Users/tovai/Documents/Web Develpoment/Projects/forward-education/public/images/fecoverpic.jpg')",
      }
    },

  },
  plugins: [],
}