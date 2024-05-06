/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zurich: ['Zurich-Bold', 'Zurich-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}