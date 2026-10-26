import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
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
