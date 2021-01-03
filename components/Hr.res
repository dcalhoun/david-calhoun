@react.component
let make = (~className="") => {
  <div
    className={className ++ " relative w-full text-gray-400 my-16"}
    style={ReactDOM.Style.make(
      ~backgroundImage="linear-gradient(to left, currentColor calc(50% - 16px), transparent calc(50% - 16px), transparent calc(50% + 16px), currentColor calc(50% + 16px))",
      ~height="1px",
      (),
    )}>
    <div
      className="h-4 bg-gray-400 absolute transform rotate-12"
      style={ReactDOM.Style.make(
        ~left="calc(50% - 0.25rem)",
        ~top="calc(50% - 0.5rem)",
        ~width="1px",
        (),
      )}
    />
    <div
      className="h-4 bg-gray-400 absolute transform rotate-12"
      style={ReactDOM.Style.make(
        ~left="calc(50% + 0.25rem)",
        ~top="calc(50% - 0.5rem)",
        ~width="1px",
        (),
      )}
    />
  </div>
}
