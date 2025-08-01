import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    
  ],
  
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Proxy all API requests to Express server
    },
  },
})