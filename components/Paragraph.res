@react.component
let make = (~className=?, ~children) =>
  <p
    className={"font-serif text-gray-800 text-base md:text-2xl mb-4 md:mb-8 " ++
    className->Belt.Option.getWithDefault("")}>
    children
  </p>
