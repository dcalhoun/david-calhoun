type eventParams = {
  event_category: option(string),
  event_label: option(string),
  value: option(int),
};

[@bs.val]
external gtagEvent:
  (~command: string, ~action: string, ~eventParams: eventParams) => unit =
  "gtag";

let sendEvent = (~action, ~eventParams) =>
  gtagEvent(~command="event", ~action, ~eventParams);

type pageViewParams = {
  page_title: option(string),
  page_location: option(string),
  page_path: option(string),
};

[@bs.val]
external gtagPageView:
  (~command: string, ~action: string, ~pageViewParams: pageViewParams) => unit =
  "gtag";

[@bs.val]
external gaTrackingId: option(string) =
  "process.env.NEXT_PUBLIC_GA_TRACKING_ID";

let sendPageView = (~pageViewParams) =>
  switch (gaTrackingId) {
  | Some(gaTrackingId) =>
    gtagPageView(~command="config", ~action=gaTrackingId, ~pageViewParams)
  | None => ()
  };
