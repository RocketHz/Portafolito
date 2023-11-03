/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gulf-blue': {
          '50': '#ebfcff',
          '100': '#d1f8ff',
          '200': '#adf0ff',
          '300': '#75e6ff',
          '400': '#33ccff',
          '500': '#05a3ff',
          '600': '#0073ff',
          '700': '#0051ff',
          '800': '#0039d6',
          '900': '#0032a8',
          '950': '#051b5c',
        },
        'custom-blue': '3d6ab9',
      },
      animation: {
        'sh02': 'sh02 0.5s ease-out 1',
      }
    },
  },
  plugins: [],
}

