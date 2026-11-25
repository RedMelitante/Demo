import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const root = import.meta.dirname;

export default defineConfig({
  plugins: [],
  // Multi-page site: each HTML entry below is its own page.
  // Unknown dev URLs return 404 instead of falling back to the home page.
  appType: 'mpa',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Keep photos as separate cacheable files rather than inlining them.
    assetsInlineLimit: 0,
    rolldownOptions: {
      input: {
        main: resolve(root, 'index.html'),             // served at /
        landscaping: resolve(root, 'landscaping/index.html'), // served at /landscaping/
        sinclair: resolve(root, 'Sinclair-landscaping.html')  // served at /Sinclair-landscaping
      }
    }
  }
});
