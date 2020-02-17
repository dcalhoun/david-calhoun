module TextButton = {
  // TODO: CSS custom properties do not work. PostCSS?
  [%raw {| require("../components/TextButton.css")|}];
  [@genType.import ("../components/TextButton", "default")]
  [@react.component forwardRef]
  external make:
    (
      ~className: string=?,
      ~children: React.element,
      ~onClick: 'event => 'unit,
      ~external_: bool=?,
      ~href: string=?,
      ~rel: string=?,
      ~target: string=?
    ) =>
    React.element =
    "make2";
};

[@react.component]
let make = () => {
  <>
    <TextButton onClick={_event => {ignore}}>
      {React.string("Click Me!")}
    </TextButton>
  </>;
};

let default = make;
