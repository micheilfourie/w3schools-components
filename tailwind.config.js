/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#545455',
        'greyDark': '#2f2f30',
        'greyLight': '#f5f5f5',
        'green': '#05AA6C',
        'white': '#ffffff',
        'black': '#000000',
      }
    },
  },
  plugins: [],
}


