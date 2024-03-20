/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'light': {
          'primary-100': '#66B3FF',
          'primary-200': '#4196e0',
          'primary-300': '#00589a',
          'accent-100': '#3399FF',
          'accent-200': '#00429a',
          'text-100': '#333333',
          'text-200': '#5c5c5c',
          'bg-100': '#E6F2FF',
          'bg-200': '#dce8f5',
          'bg-300': '#b4bfcc',
        },
        'oscure': {
          'primary-100': '#1E90FF',
          'primary-200': '#6fc0ff',
          'primary-300': '#e4ffff',
          'accent-100': '#4682B4',
          'accent-200': '#e1ffff',
          'text-100': '#FFFFFF',
          'text-200': '#e0e0e0',
          'bg-100': '#1A1A1A',
          'bg-200': '#292929',
          'bg-300': '#404040',
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

