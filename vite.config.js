import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/threejs_sample/',
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})
