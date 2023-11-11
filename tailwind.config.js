/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btn: {
          green: '#ECFF12',
          text: '#464646',
        },
      }
    },
  plugins: [],
}

}