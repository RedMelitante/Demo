/** @type {import('tailwindcss').Config} */
// Design tokens for the Sinclair Landscaping Solutions page (/Sinclair-landscaping), from its design handoff.
// Loaded by src/sinclair/styles.css via @config, so it never affects the other pages.
export default {
  content: ['./Sinclair-landscaping.html', './Sinclair-landscaping/**/*.html', './src/sinclair/**/*.js'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#1F3A2E', dark: '#152A21', light: '#2C4F3F' },
        sage: { DEFAULT: '#8BA888', light: '#DCE5D6', pale: '#EEF2EA' },
        cream: { DEFAULT: '#F6F2EA', dark: '#ECE5D8' },
        clay: { DEFAULT: '#B5582F', dark: '#97461F' },
        ink: '#1E2420'
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
