/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'bebas': ['Bebas Neue', 'cursive']
      },
    },
    screens: {
      'phone': '320px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1370px',
      'largerDevice': "1500px"
    },
  },
  plugins: []
}
