import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    open: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@p': path.resolve(__dirname, './public')
    },
  },
  plugins: [vue()]
})
