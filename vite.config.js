import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tr } from 'framer-motion/client'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    minify: 'terser',
    cssMinify: true,
    terserOptions: {
      compress: {
        passes: 2,
      },
      mangle: {
        toplevel: true,
      },
      format: {
        comments: false,
      },
    },
  },
})
