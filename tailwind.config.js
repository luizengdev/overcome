/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif', 'Poppins'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
      colors: {
        mainBackgroundColor: '#0D1117',
        columnBackgroundColor: '#161C22',
      },
    },
  },
  plugins: [],
}
