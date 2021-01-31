@react.component
let make = React.forwardRef((
  ~className="",
  ~children,
  ~onClick: option<ReactEvent.Mouse.t => unit>=?,
  ~href: option<string>=?,
  _ref: Js.Nullable.t<React.ref<'a>>,
) => {
  let onClick = switch onClick {
  | Some(onClick) => Some(onClick)
  | _ => None
  }

  ReactDOMRe.createElement(
    href->Belt.Option.mapWithDefault("button", _href => "a"),
    ~props=ReactDOMRe.props(
      ~className=className ++ " text-blue-500 text-blue-400 underline active:opacity-50 transition-opacity",
      ~href?,
      ~onClick?,
      (),
    ),
    [children],
  )
})
