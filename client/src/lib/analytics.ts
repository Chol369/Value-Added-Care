// Initialize Google Analytics
export function initializeGoogleAnalytics() {
  // Use the actual GA ID
  const googleAnalyticsId = 'G-WCZ5TLFGG9';
  

  // Create script for Google Analytics
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
  document.head.appendChild(gaScript);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', googleAnalyticsId);

  // Add the gtag function to window
  window.gtag = gtag;
}

// Track page views
export function trackPageView(path: string) {
  if (typeof window.gtag !== 'function') return;
  
  window.gtag('event', 'page_view', {
    page_path: path,
  });
}

// Add gtag to window type
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}