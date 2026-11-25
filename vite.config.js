import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Keep photos as separate cacheable files rather than inlining them.
    assetsInlineLimit: 0
  }
});
