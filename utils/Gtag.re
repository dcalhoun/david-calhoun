type eventParams = {
  event_category: option(string),
  event_label: option(string),
  value: option(int),
};

[@bs.val]
external trackEvent: (~action: string, ~eventParams: eventParams) => unit =
  "gtag";
