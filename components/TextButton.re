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
      _ref: Js.Nullable.t(React.ref('a)),
    ) => {
    let onClick = {
      switch (onClick, external_) {
      | (Some(onClick), Some(true)) =>
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
        )
      | (Some(onClick), None) => Some(onClick)
      | _ => None
      };
    };

    ReactDOMRe.createElement(
      href->Belt.Option.mapWithDefault("button", _href => "a"),
      ~props=
        ReactDOMRe.props(
          ~className=
            "TextButton " ++ className->Belt.Option.getWithDefault(""),
          ~href?,
          ~onClick?,
          (),
        ),
      [|children|],
    );
  });
