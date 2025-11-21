/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#b3d9ff',
          200: '#80c2ff',
          300: '#4dabff',
          400: '#1a94ff',
          500: '#0075e6',
          600: '#005bb3',
          700: '#004280',
          800: '#00294d',
          900: '#00101a',
        },
      },
    },
  },
  plugins: [],
}

