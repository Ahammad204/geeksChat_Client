/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],
    
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
      },
      colors: {
        'custom-gray': 'rgba(0, 0, 0, 0.54)'
      }
    },
  },
  plugins: [],
}

