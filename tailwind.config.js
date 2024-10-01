/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary-1': '#f7078f',
      'primary-2': '#fb459b',
      'primary-3': '#ff64a7',
      'dark-1': '#000717',
      'dark-2': '#1d212c',
      'dark-3': '#353842',
      'white': 'rgb(255 255 255)',
      'slate-300': 'rgb(203 213 225)'
    },
    extend: {
      textUnderlineOffset: {
        16: '16px',
      },
      maxHeight:{
        '120': '32rem'
      }
    },
  },
  plugins: [],
}

