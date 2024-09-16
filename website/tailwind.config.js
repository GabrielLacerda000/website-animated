/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        suse: ["SUSE", 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s  infinite'
      }
    },
  },
  plugins: [],
}