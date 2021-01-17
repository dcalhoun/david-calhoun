@react.component
let make = React.forwardRef((~className="", ~children, ~href=?, ~onClick=?, _ref) => {
  <a
    className={className ++ " bg-white dark:bg-gray-700 text-blue-500 dark:text-blue-400 rounded border border-gray-300 dark:border-gray-900 p-2 shadow-sm hover:shadow-lg transition-shadow duration-300"}
    href=?{href}
    onClick=?{onClick}>
    children
  </a>
})
