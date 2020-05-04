let stripEmpty = string => {
  switch (string) {
  | None => ""
  | Some(string) => " " ++ string
  };
};

type event = {
  event_category: string,
  event_label: option(string),
  value: option(string),
};

type clickHandler = ReactEvent.Mouse.t => unit;

[@bs.val] external gtag: (string, string, event) => unit = "gtag";

let trackEvent = (~action, ~params) => gtag("event", action, params);

[%raw {| require("../components/TextButton.css")|}];

[@react.component]
let make =
  React.forwardRef(
    (
      ~className: option(string)=?,
      ~children,
      ~onClick: option(clickHandler)=?,
      ~external_: option(bool)=?,
      ~href: option(string)=?,
      ~_rel: option(string)=?,
      ~_target: option(string)=?,
      _ref: Js.Nullable.t(React.Ref.t('a)),
    ) => {
    let needsExternalOnClick = (onClick, href, external_);
    let (target, rel, onClick) = {
      switch (needsExternalOnClick) {
      | (Some(onClick), Some(_string), Some(true)) => (
          "_blank",
          "noopener noreferrer",
          (
            event => {
              trackEvent(
                ~action="Click Link",
                ~params={
                  event_category: "External Links",
                  event_label: href,
                  value: None,
                },
              );
              onClick(event);
            }
          ),
        )
      | (Some(onClick), None, None) => ("", "", onClick)
      | _ => ("", "", (_event => ()))
      };
    };

    <a
      className={"TextButton" ++ stripEmpty(className)}
      ?href
      onClick={event => {
        switch (onClick) {
        | onClick => onClick(event)
        }
      }}
      target
      rel>
      children
    </a>;
  });
