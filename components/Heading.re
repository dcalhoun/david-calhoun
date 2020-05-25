module H1 = {
  [@react.component]
  let make = (~className=?, ~children) => {
    <h1
      className={
        "text-3xl lg:text-5xl font-bold" ++ String.stripEmpty(className)
      }>
      children
    </h1>;
  };
};

module H2 = {
  [@react.component]
  let make = (~className=?, ~children) => {
    <h2
      className={
        "text-xl lg:text-3xl font-bold mb-2" ++ String.stripEmpty(className)
      }>
      children
    </h2>;
  };
};

module H3 = {
  [@react.component]
  let make = (~className=?, ~children) => {
    <h3
      className={
        "text-md lg:text-lg uppercase mb-2" ++ String.stripEmpty(className)
      }>
      children
    </h3>;
  };
};

module H4 = {
  [@react.component]
  let make = (~className=?, ~children) => {
    <h4
      className={
        "text-sm lg:text-lg opacity-75 mb-4 lg:mb-8"
        ++ String.stripEmpty(className)
      }>
      children
    </h4>;
  };
};
