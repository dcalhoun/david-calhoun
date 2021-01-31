@react.component
let make = (~className="", ~children, ~style=?) =>
  <p className={"font-serif text-base md:text-2xl mb-4 md:mb-8 " ++ className} ?style> children </p>
