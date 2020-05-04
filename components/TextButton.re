type event = {
  event_category: string,
  event_label: string,
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
      ~onClick: option(ReactEvent.Mouse.t => unit)=?,
      ~external_: option(bool)=?,
      ~href: string,
      ~rel: string="",
      ~target: string="",
      _ref: Js.Nullable.t(React.Ref.t('a)),
    ) => {
    let needsExternalOnClick = (onClick, external_);
    let (target, rel, onClick) = {
      switch (needsExternalOnClick) {
      | (Some(onClick), Some(true)) => (
          rel ++ "_blank",
          target ++ "noopener noreferrer",
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
      | (Some(onClick), None) => (target, rel, onClick)
      | _ => (target, rel, (_event => ()))
      };
    };

    <a
      className={"TextButton" ++ String.stripEmpty(className)}
      href
      onClick
      target
      rel>
      children
    </a>;
  });
