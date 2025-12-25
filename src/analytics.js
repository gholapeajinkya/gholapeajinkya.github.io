import ReactGA from 'react-ga4';

/**
 * Initialize Google Analytics 4
 * @param {string} measurementId - Your GA4 Measurement ID (G-XXXXXXXXXX)
 */
export const initGA = (measurementId) => {
  if (!measurementId) {
    console.warn('GA4 Measurement ID not provided. Analytics will not be initialized.');
    return;
  }

  // Only initialize in production or if explicitly enabled
  const isDevelopment = import.meta.env.DEV;
  
  if (isDevelopment && !import.meta.env.VITE_GA_DEBUG) {
    console.log('GA4 disabled in development mode. Set VITE_GA_DEBUG=true to enable.');
    return;
  }

  ReactGA.initialize(measurementId, {
    gtagOptions: {
      send_page_view: false, // We'll handle page views manually for better control
    },
  });
};

/**
 * Track page views
 * @param {string} path - The page path
 * @param {string} title - Optional page title
 */
export const trackPageView = (path, title) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path,
    title: title || document.title,
  });
};

/**
 * Track custom events
 * @param {string} category - Event category
 * @param {string} action - Event action
 * @param {string} label - Optional event label
 * @param {number} value - Optional numeric value
 */
export const trackEvent = (category, action, label, value) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

/**
 * Track outbound links
 * @param {string} url - The destination URL
 * @param {string} label - Optional label
 */
export const trackOutboundLink = (url, label) => {
  trackEvent('Outbound Link', 'Click', label || url);
};

/**
 * Track downloads
 * @param {string} filename - The file being downloaded
 */
export const trackDownload = (filename) => {
  trackEvent('Download', 'Click', filename);
};

/**
 * Track social interactions
 * @param {string} network - Social network name (e.g., 'LinkedIn', 'GitHub')
 * @param {string} action - Action taken (e.g., 'Click', 'Share')
 * @param {string} target - Optional target/URL
 */
export const trackSocial = (network, action, target) => {
  ReactGA.event({
    category: 'Social',
    action: `${network} - ${action}`,
    label: target,
  });
};
