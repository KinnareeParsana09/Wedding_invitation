import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import config from './config.js'

// Keep the document title in sync with config (so future name changes
// flow through automatically without touching index.html).
if (typeof document !== 'undefined' && config?.couple) {
  const { bride, groom, separator } = config.couple
  document.title = `${bride} ${separator} ${groom} • Wedding Invitation`
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
