/** @type {import('tailwindcss').Config} */
// Design tokens for the Notlee Landscapes page (/landscaping/), from its design handoff.
// Loaded by src/landscaping/styles.css via @config, so it never affects the home page.
export default {
  content: ['./landscaping/**/*.html', './src/landscaping/**/*.js'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#1E3A2B', 900: '#132619', 800: '#1E3A2B', 700: '#2B4E3A', 600: '#3B6449' },
        leaf: { DEFAULT: '#5E8C3E', light: '#E7EFDC' },
        wattle: { DEFAULT: '#E2A93B', dark: '#C98F22' },
        sand: { DEFAULT: '#F5F1E8', dark: '#E9E2D2' },
        ink: '#1B1F1C'
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: { soft: '0 18px 40px -18px rgba(19,38,25,.35)' }
    }
  },
  plugins: []
};
