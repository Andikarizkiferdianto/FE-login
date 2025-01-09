import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'slick-carousel/slick': path.resolve(__dirname, 'node_modules/slick-carousel/slick'),
    },
  },
  build: {
    rollupOptions: {
      external: [
        'slick-carousel/slick/slick.css',
        'slick-carousel/slick/slick-theme.css',
        'aos',
        'react-icons/fa',
        'react-star-ratings',
        'react-slick',
        'react-icons/fa6',  // Externalize react-icons/fa6
        'react-icons/gr',   // Externalize react-icons/gr
      ],
    },
  },
  optimizeDeps: {
    include: [
      'react-router-dom',
      'react-slick',
      'react-icons/fa6',
      'react-icons/gr',
    ],
  },
});
