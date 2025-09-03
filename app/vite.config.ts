import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/CodingChallenge/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    headers: {
      "ngrok-skip-browser-warning": "true",
      "bypass-tunnel-reminder": "true",
    },
    allowedHosts: true,
  },
})
