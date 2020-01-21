declare global {
  interface Window {
    gtag?(command: string, ...args: any): void;
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url: string) {
  window.gtag("config", process.env.GA_TRACKING_ID, {
    page_path: url
  });
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
interface GoogleEvent {
  action: string;
  category: string;
  label: string;
  value?: string;
}

export function event({ action, category, label, value }: GoogleEvent) {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
}
