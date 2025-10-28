import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Dynamically set base for local vs. production
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: '/',
}))
