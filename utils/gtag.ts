export function pageview(page_path: string): void {
  // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
  window.gtag("config", process.env.GA_TRACKING_ID, { page_path });
}

export function event(
  action: string,
  { event_category, event_label, value }: Gtag.EventParams
): void {
  // https://developers.google.com/analytics/devguides/collection/gtagjs/events
  window.gtag("event", action, {
    event_category,
    event_label,
    value
  });
}
