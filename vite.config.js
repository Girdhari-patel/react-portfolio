import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
})

// Compare this snippet from react-portfolio/package.json:


// https://vite.dev/config/
