import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite settings for the dev server and build
export default defineConfig({
  // Adds React support (JSX and fast refresh)
  plugins: [react()],
  server: {
    // Allow the preview URL to connect to the dev server
    allowedHosts: true,
  },
})
