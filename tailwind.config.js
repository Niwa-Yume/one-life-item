/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5D3A00',
        secondary: '#D2B48C',
        accent: '#556B2F',
        background: '#F5F5DC',
        text: '#000000',
      },
    },
  },
  plugins: [],
}
