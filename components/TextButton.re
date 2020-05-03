let stripEmpty = string => {
  switch (string) {
  | None => ""
  | Some(string) => string
  };
};

type event = {
  event_category: string,
  event_label: option(string),
  value: option(string),
};

[@bs.val] external gtag: (string, string, event) => unit = "gtag";

let trackEvent = (~action, ~params) => gtag("event", action, params);

[%raw {| require("../components/TextButton.css")|}];

[@react.component]
let make =
  React.forwardRef(
    (
      ~className: option(string)=?,
      ~children,
      ~onClick: 'a => unit,
      ~external_: option(bool)=?,
      ~href: option(string)=?,
      ~rel: option(string)=?,
      ~target: option(string)=?,
      ref: Js.Nullable.t(React.Ref.t('a)),
    ) => {
    let needsExternalOnClick = (onClick, href, external_);
    let (target, rel, onClick) = {
      switch (needsExternalOnClick) {
      | (value, Some(string), Some(true)) => (
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
            }
          ),
        )
      | _ => ("", "", onClick)
      };
    };

    <a
      className={"TextButton" ++ stripEmpty(className)}
      ?href
      onClick
      target
      rel>
      children
    </a>;
  });
