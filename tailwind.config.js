/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          green: '#ECFF12',
          "text-gray": '#464646',
          "menu-gray": "#718BE60",

      }
    },
    screens: {
      xs: "480px",
},
  plugins: [],
}

}