import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/02-portafolio-static/',
  server: {
    host: '0.0.0.0',
  }

})
