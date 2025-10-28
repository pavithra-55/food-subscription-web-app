import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Works both locally and on GitHub Pages
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/food-subscription-web-app/' : '/',
}))