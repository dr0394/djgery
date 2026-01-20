/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'darkest': '#0D0221',
          'dark': '#240046',
          'magenta': '#FF4500',
          'pink': '#FF6B35',
          'fire-red': '#FF4500',
          'fire-orange': '#FF6B35',
          'fire-gold': '#FFA500',
          'neon': '#B7F900',
        }
      }
    },
  },
  plugins: [],
};
