import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000
    },
    define: {
        // This helps with the CJS deprecation warning
        global: 'globalThis',
    }
}) 
