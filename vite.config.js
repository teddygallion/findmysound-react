import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/login': {
        target: 'http://localhost:8888', // Direct backend URL
        changeOrigin: true,
        secure: false
      },
      '/callback': {
        target: 'http://localhost:8888', // Direct backend URL
        changeOrigin: true,
        secure: false
      }
    }
  }
});
