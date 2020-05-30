[@react.component]
let make = (~className=?, ~children) => {
  <p
    className={
      "text-lg lg:text-2xl mb-4 lg:mb-8" ++ String.stripEmpty(className)
    }>
    children
  </p>;
};
