// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url) {
  window.gtag("config", process.env.GA_TRACKING_ID, {
    page_path: url
  });
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function event({ action, category, label, value }) {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
}
