/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/**/*.{vue,ts,js,html}"],
  theme: {
    extend: {
      backgroundImage:{
        "hell":"url('/src/assets/backgroundimage.jpg')",
        "split-white-black": "linear-gradient(to bottom, #111827 60% , white 40%)",
        
      }
    },
  },
  plugins: [],
}
