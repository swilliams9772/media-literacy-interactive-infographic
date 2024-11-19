/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#E53935',
        'primary-light': '#FF6B6B',
        'secondary': '#1E1E1E',
        'accent': '#FFB300',
        'accent-light': '#FFD54F',
        'background': '#121212',
        'surface': '#2C2C2C',
        'textPrimary': '#E0E0E0',
        'textSecondary': '#B0B0B0',
        'revolutionary': {
          red: '#E53935',
          gold: '#FFB300',
          dark: '#1E1E1E',
          light: '#E0E0E0',
        }
      },
      backgroundImage: {
        'gradient-revolutionary': 'linear-gradient(135deg, #E53935 0%, #FFB300 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1E1E1E 0%, #121212 100%)',
      },
      boxShadow: {
        'revolutionary': '0 4px 20px rgba(229, 57, 53, 0.15)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
