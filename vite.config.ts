import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/immich-api': {
        target: 'https://immich.finleyharrison.ca',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/immich-api/, ''),
      },
    },
  },
});