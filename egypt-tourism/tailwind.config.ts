import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './types/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sand: '#BBA27E',
          teal: '#108E81',
          dark: '#134645',
          darkest: '#194033',
          forest: '#53685E',
          sage: '#96A69E',
          sandLight: '#D2C6B8',
          tealMid: '#277971',
        },
        'teal-accessible': '#0A6B61',
        'sand-accessible': '#8B6A4A',
      }
    }
  },
  plugins: []
};

export default config;
