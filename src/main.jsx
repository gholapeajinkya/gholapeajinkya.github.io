import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import PortfolioApp from './App'
import { initGA, trackPageView } from './analytics'

// Initialize Google Analytics
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (GA_MEASUREMENT_ID) {
  initGA(GA_MEASUREMENT_ID);
} else {
  console.error('GA_MEASUREMENT_ID is undefined!');
}

function App() {
  useEffect(() => {
    // Track initial page view
    if (GA_MEASUREMENT_ID) {
      trackPageView(window.location.pathname + window.location.search);
    }
  }, []);

  return <PortfolioApp />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
