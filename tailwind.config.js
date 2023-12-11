/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    ".//**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#d9dbf9',
        'background': '#000016',
        'primary': '#8d92ed',
        'secondary': '#4f1588',
        'accent': '#9922dd',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
}

