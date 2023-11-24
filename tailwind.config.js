/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customBlue':{
            DEFAULT: '#406EBE',
          '50': '#E6F0FF',
          '100': '#C0D9FF',
          '200': '#8AB3FF',
          '300': '#559CFF',
          '400': '#2F85FF',
          '500': '#2D7FF9',
          '600': '#1F5FC0',
          '700': '#164080',
          '800': '#0D2B40',
          '900': '#051300'
        }
      }
    },
  },
  plugins: [],
}

