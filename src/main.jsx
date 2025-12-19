import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import PortfolioApp from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <PortfolioApp />
    </HelmetProvider>
  </StrictMode>,
)
