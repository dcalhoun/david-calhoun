let sendExternalLinkClick = href =>
  Gtag.sendEvent(
    ~action="Click Link",
    ~eventParams={
      event_category: Some("External Links"),
      event_label: href,
      value: None,
    },
  )

@react.component
let make = React.forwardRef((
  ~className="",
  ~children,
  ~onClick: option<ReactEvent.Mouse.t => unit>=?,
  ~external_: option<bool>=?,
  ~href: option<string>=?,
  _ref: Js.Nullable.t<React.ref<'a>>,
) => {
  let onClick = switch (onClick, external_) {
  | (Some(onClick), Some(true)) =>
    Some(
      event => {
        sendExternalLinkClick(href)
        onClick(event)
      },
    )
  | (None, Some(true)) => Some(_event => sendExternalLinkClick(href))
  | (Some(onClick), None) => Some(onClick)
  | _ => None
  }

  ReactDOMRe.createElement(
    href->Belt.Option.mapWithDefault("button", _href => "a"),
    ~props=ReactDOMRe.props(
      ~className=className ++ " no-underline active:opacity-50 transition-opacity TextButton",
      ~href?,
      ~onClick?,
      (),
    ),
    [children],
  )
})
