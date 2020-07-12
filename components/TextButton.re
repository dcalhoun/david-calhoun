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
      ~rel: option(string)=?,
      ~target: option(string)=?,
      _ref: Js.Nullable.t(React.ref('a)),
    ) => {
    let needsExternalOnClick = (onClick, external_);

    let (target, rel, onClick) = {
      switch (needsExternalOnClick) {
      | (Some(onClick), Some(true)) => (
          Some("_blank"),
          Some("noopener noreferrer"),
          Some(
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
            },
          ),
        )
      | (Some(onClick), None) => (target, rel, Some(onClick))
      | (None, Some(true)) => (
          Some("_blank"),
          Some("noopener noreferrer"),
          None,
        )
      | _ => (target, rel, None)
      };
    };

    let element =
      switch (href) {
      | Some(_href) => "a"
      | None => "button"
      };

    ReactDOMRe.createElement(
      element,
      ~props=
        ReactDOMRe.props(
          ~className="TextButton" ++ String.stripEmpty(className),
          ~href?,
          ~onClick?,
          ~target?,
          ~rel?,
          (),
        ),
      [|children|],
    );
  });
