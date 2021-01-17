let months = list{
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
}

@react.component
let make = (~dateString) => {
  let formattedDate = switch %re("/-/g")->Js.String.splitByRe(dateString)->Array.to_list {
  | list{Some(year), Some(month), Some(day)} =>
    day ++ (" " ++ (List.nth(months, int_of_string(month) - 1) ++ (" " ++ year)))
  | _ => ""
  }
  <time
    className="inline-block text-base text-gray-700 dark:text-gray-400 md:text-xl mb-4 md:mb-8" dateTime=dateString>
    {formattedDate->React.string}
  </time>
}
