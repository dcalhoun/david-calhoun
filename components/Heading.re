module Styles = {
  let primary = "text-2xl lg:text-6xl font-bold leading-tight";
  let secondary = "text-xl lg:text-3xl font-bold";
  let tertiary = "text-md lg:text-lg uppercase";
  let quaternary = "font-mono text-md lg:text-lg";
};

[@react.component]
let make = (~className=Styles.primary, ~children, ~level=1) => {
  ReactDOMRe.createDOMElementVariadic(
    "h" ++ string_of_int(level),
    ~props={
      ReactDOMRe.domProps(~className, ());
    },
    [|children|],
  );
};
