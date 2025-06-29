/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tomatoes: ['Special Gothic Expanded One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
