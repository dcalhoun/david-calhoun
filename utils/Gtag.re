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
