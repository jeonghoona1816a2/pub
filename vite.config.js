import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Vite is configured to use app.html as the React entry
export default defineConfig({
  plugins: [react()],
  server: {
    open: '/app.html'
  },
  build: {
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'app.html')
      }
    }
  }
});
