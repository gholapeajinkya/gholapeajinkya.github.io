# Google Analytics (GA4) Integration Guide

## Setup Instructions

### 1. Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property (or use existing one)
3. Navigate to **Admin** → **Data Streams** → Select your web stream
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Configure Environment Variable

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` and replace with your actual Measurement ID:

```bash
VITE_GA_MEASUREMENT_ID=G-YOUR-ACTUAL-ID
```

**Important:** The `.env` file is git-ignored for security. Never commit your actual Measurement ID to version control.

### 3. Deploy Configuration

For GitHub Pages deployment, you have two options:

#### Option A: Add to Vite Config (Recommended for Public Sites)
Since this is a public portfolio site, you can directly add the ID to your `vite.config.js`:

```javascript
export default defineConfig({
  // ... other config
  define: {
    'import.meta.env.VITE_GA_MEASUREMENT_ID': JSON.stringify('G-YOUR-ACTUAL-ID')
  }
})
```

#### Option B: Build-time Environment Variable
Set the environment variable before building:

```bash
VITE_GA_MEASUREMENT_ID=G-YOUR-ACTUAL-ID npm run build
```

Or add it to your GitHub Actions workflow if using CI/CD.

## Usage

### Page View Tracking
Page views are automatically tracked when the app loads. For single-page applications, you would typically track route changes, but since this is a single-page portfolio, the initial tracking is sufficient.

### Event Tracking Examples

Import the tracking functions in your components:

```javascript
import { trackEvent, trackOutboundLink, trackSocial } from './analytics';

// Track button clicks
<button onClick={() => trackEvent('Portfolio', 'View Project', 'Project Name')}>
  View Project
</button>

// Track external links
<a 
  href="https://example.com"
  onClick={() => trackOutboundLink('https://example.com', 'Portfolio Link')}
>
  Visit Site
</a>

// Track social media clicks
<a 
  href="https://linkedin.com/in/yourprofile"
  onClick={() => trackSocial('LinkedIn', 'Click', 'Profile Link')}
>
  LinkedIn
</a>

// Track downloads
<button onClick={() => trackDownload('resume.pdf')}>
  Download Resume
</button>
```

## Development Mode

By default, GA4 is **disabled in development** to avoid polluting your analytics data.

To enable GA4 in development for testing:

```bash
# Add to .env
VITE_GA_DEBUG=true
```

## Verifying Installation

1. Start your development server: `npm run dev`
2. Open browser DevTools → Console
3. You should see: `GA4 initialized with ID: G-XXXXXXXXXX`
4. Go to GA4 Real-time reports to see live activity

## Best Practices

1. **Test Before Deploying**: Always verify GA4 is working in dev mode first
2. **Privacy**: Ensure compliance with GDPR/privacy laws if collecting data from EU users
3. **Data Layer**: Consider implementing a data layer for more advanced tracking
4. **Events**: Track meaningful user interactions (CTAs, downloads, outbound links)
5. **Debugging**: Use [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger) Chrome extension

## Troubleshooting

### GA4 Not Tracking
- Verify your Measurement ID is correct
- Check browser console for errors
- Ensure ad blockers are disabled when testing
- Check GA4 real-time reports (data may take 24-48hrs for full reports)

### Environment Variable Not Loading
- Vite requires the `VITE_` prefix for env variables
- Restart dev server after changing `.env`
- Verify `.env` file is in the project root

## Files Modified

- `src/analytics.js` - GA4 utility functions
- `src/main.jsx` - GA4 initialization
- `.env.example` - Environment variable template
- `.gitignore` - Ensures `.env` is not committed

## Additional Resources

- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [react-ga4 GitHub](https://github.com/codler/react-ga4)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
