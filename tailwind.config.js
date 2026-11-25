/** @type {import('tailwindcss').Config} */
// Design tokens from the Claude Design handoff (Organic Gardening Australia.html).
export default {
  // Home page only. The /landscaping/ page has its own config (tailwind.landscaping.config.js).
  content: ['./index.html', './src/main.js'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#1E3A2B', 900: '#15291E', 700: '#2A4D39' },
        leaf: '#3F6B45',
        sage: { DEFAULT: '#A8BFA0', 100: '#E8EFE3' },
        cream: '#F7F4EC',
        wattle: { DEFAULT: '#E3B341', 600: '#CC9A2A' },
        bark: '#6B4F36'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
};
