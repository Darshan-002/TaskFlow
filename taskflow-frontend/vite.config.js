import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TaskFlow/', // 👈 IMPORTANT — must match your repo name exactly
  plugins: [react()],
})
