import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// =============================================================
// GitHub Pages deploy note:
// If hosting at https://<user>.github.io/<repo>/ set base to '/<repo>/'.
// You can override at build time with: VITE_BASE=/my-repo/ npm run build
// For root-domain or local dev, base stays '/'.
// =============================================================
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: process.env.VITE_BASE || (command === 'build' ? './' : '/'),
  //base: '/Wedding_invitation/',
}))
