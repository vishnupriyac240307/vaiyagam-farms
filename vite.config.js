import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Automatically use '/vaiyagam-farms/' for GitHub Pages, and '/' for Vercel, Netlify, custom domains & local dev
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const base = isGitHubPages ? '/vaiyagam-farms/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    host: '127.0.0.1',
    fs: {
      strict: true,
      allow: [path.resolve('.')]
    }
  },
  preview: {
    port: 5173,
    strictPort: true,
    host: '127.0.0.1'
  }
});
