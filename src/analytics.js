let reactGAInstance = null;
let gaLoaderPromise = null;
let gaInitialized = false;

const loadGA = async () => {
  if (reactGAInstance) return reactGAInstance;

  if (!gaLoaderPromise) {
    gaLoaderPromise = import('react-ga4')
      .then((module) => {
        reactGAInstance = module.default;
        return reactGAInstance;
      })
      .catch((error) => {
        gaLoaderPromise = null;
        throw error;
      });
  }

  return gaLoaderPromise;
};

const normalizeToken = (value, fallback = 'unknown') => {
  if (!value) return fallback;
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '') || fallback;
};

const safeGA = async (callback) => {
  try {
    const ReactGA = await loadGA();
    callback(ReactGA);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.warn('Analytics call skipped:', error);
    }
  }
};

/**
 * Initialize Google Analytics 4
 * @param {string} measurementId - Your GA4 Measurement ID (G-XXXXXXXXXX)
 */
export const initGA = (measurementId) => {
  if (!measurementId) {
    console.warn('GA4 Measurement ID not provided. Analytics will not be initialized.');
    return;
  }

  if (gaInitialized) return;

  // Only initialize in production or if explicitly enabled
  const isDevelopment = import.meta.env.DEV;
  
  if (isDevelopment && !import.meta.env.VITE_GA_DEBUG) {
    console.log('GA4 disabled in development mode. Set VITE_GA_DEBUG=true to enable.');
    return;
  }

  safeGA((ReactGA) => {
    ReactGA.initialize(measurementId, {
      gtagOptions: {
        send_page_view: false,
      },
    });
    gaInitialized = true;
  });
};

/**
 * Track page views
 * @param {string} path - The page path
 * @param {string} title - Optional page title
 */
export const trackPageView = (path, title) => {
  safeGA((ReactGA) => {
    ReactGA.send({
      hitType: 'pageview',
      page: path,
      title: title || document.title,
    });
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
  safeGA((ReactGA) => {
    ReactGA.event({
      category: normalizeToken(category, 'engagement'),
      action: normalizeToken(action, 'click'),
      label: label ? normalizeToken(label) : undefined,
      value,
    });
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
  trackEvent('social', `${normalizeToken(network)}_${normalizeToken(action)}`, target);
};
