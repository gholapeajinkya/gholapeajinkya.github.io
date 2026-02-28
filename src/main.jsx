import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import PortfolioApp from './App'
import { initGA, trackPageView } from './analytics'

// Initialize Google Analytics
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (GA_MEASUREMENT_ID) {
  const startAnalytics = () => {
    initGA(GA_MEASUREMENT_ID);
    trackPageView(window.location.pathname + window.location.search);
  };

  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(startAnalytics, { timeout: 2500 });
  } else {
    window.setTimeout(startAnalytics, 0);
  }
} else {
  console.error('GA_MEASUREMENT_ID is undefined!');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <PortfolioApp />
    </HelmetProvider>
  </StrictMode>,
)
