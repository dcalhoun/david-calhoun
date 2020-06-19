[%raw {| require("../components/TextButton.css")|}];

[@react.component]
let make =
  React.forwardRef(
    (
      ~className: option(string)=?,
      ~children,
      ~onClick: option(ReactEvent.Mouse.t => unit)=?,
      ~external_: option(bool)=?,
      ~href: option(string)=?,
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
              Gtag.trackEvent(
                ~action="Click Link",
                ~eventParams={
                  event_category: Some("External Links"),
                  event_label: href,
                  value: None,
                },
              );
              onClick(event);
            }
          ),
        )
      | (Some(onClick), None) => (target, rel, onClick)
      | (None, Some(true)) => (
          rel ++ "_blank",
          target ++ "noopener noreferrer",
          (_event => ()),
        )
      | _ => (target, rel, (_event => ()))
      };
    };
    let element =
      switch (href) {
      | Some(_href) => "a"
      | None => "button"
      };
    let href = {
      switch (href) {
      | Some(href) => href
      | None => ""
      };
    };

    ReactDOMRe.createElement(
      element,
      // TODO: Conditionally pass empty props like href, target, rel
      ~props=
        ReactDOMRe.props(
          ~className="TextButton" ++ String.stripEmpty(className),
          ~href,
          ~onClick,
          ~target,
          ~rel,
          (),
        ),
      [|children|],
    );
  });
