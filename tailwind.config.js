
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black : "#010400",
        blue : "#007FE0",
        white : "#FFFFFF",
        green: "#25D0BC",
        timberwolf : "#D6D6D6",
        red : "#EF233C",
        orange : "#FF7F11",
        yellow : "#F5B82E",
        lime : "#12CF3E",
        indigo : "#A682FF",
        teal : "#0081A7",

      }
    },
  },
  plugins: [],
}


