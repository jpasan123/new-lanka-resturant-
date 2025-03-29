/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#388a45',
        secondary: '#faa362',
        accent: '#f1d34f',
        dark: '#272727',
        gold: '#cfb248',
        'orange-light': '#ffa86b',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};