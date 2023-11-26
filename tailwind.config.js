/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        // Primary
            Violet: 'hsl(257, 40%, 49%)',
            Soft_Magenta: 'hsl(300, 69%, 71%)',
      },
      fontFamily:{
        open_Sans: "'Open_Sans', sans-serif",
        Poppins:" 'Poppins', sans-serif"
      },
    },
   
  },
  plugins: [],
}

