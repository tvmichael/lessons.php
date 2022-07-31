import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~bootstrap': 'node_modules/bootstrap/dist',
    }
  }  
})