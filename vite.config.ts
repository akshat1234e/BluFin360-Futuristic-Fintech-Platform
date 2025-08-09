import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Set the correct base path for GitHub Pages deployment
  base: '/BluFin360-Futuristic-Fintech-Platform/',

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@/components": path.resolve(__dirname, "./components"),
      "@/styles": path.resolve(__dirname, "./styles"),
    },
  },
  server: {
    port: 3000,
    open: true,
    // Enable client-side routing fallback
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Ensure clean build
    emptyOutDir: true,
    // Optimize bundle sizes with manual chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    }
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
})