/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/**/*.{vue,ts,js,html}"],
  theme: {
    extend: {
      backgroundImage:{
        "hell":"url('/src/assets/backgroundimage.jpg')",
      }
    },
  },
  plugins: [],
}
