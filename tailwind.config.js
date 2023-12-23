/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
      },
      backgroundImage: {
        "topBannerBackground" : "url('/src/assets/images/homeTopBanner.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

