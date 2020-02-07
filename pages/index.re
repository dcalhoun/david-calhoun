[@bs.module "../components/TextButton.js"] [@react.component]
external make: (~name: string) => React.element = "default";

[@react.component]
let make = () => {
  <div> <TextButton> ReasonReact.string "Hello" </TextButton> </div>;
};

let default = make;
