/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px"
      },
      colors: {
             primary: "#86BC42",
             primaryDark: "#064F37",
      },
    },
  },
  plugins: [],
}