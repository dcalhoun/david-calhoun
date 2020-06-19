type pageViewParams = {
  page_title: option(string),
  page_location: option(string),
  page_path: option(string),
};

[@bs.val]
external trackPageView:
  (
    ~pagePath: string,
    ~gaMeasurementId: string,
    ~pageViewParams: pageViewParams
  ) =>
  unit =
  "gtag";

type eventParams = {
  event_category: option(string),
  event_label: option(string),
  value: option(int),
};

[@bs.val]
external trackEvent: (~action: string, ~eventParams: eventParams) => unit =
  "gtag";
