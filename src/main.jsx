import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Find the <div id="root"> in index.html and show the app inside it
createRoot(document.getElementById('root')).render(
  // StrictMode helps catch common mistakes while developing
  <StrictMode>
    {/* BrowserRouter lets the app change pages without reloading */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
