let months = [
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
];

[@react.component]
let make = (~dateString) => {
  let formattedDate =
    switch (dateString |> Js.String.splitByRe([%re "/-/g"]) |> Array.to_list) {
    | [Some(year), Some(month), Some(day)] =>
      day ++ " " ++ List.nth(months, int_of_string(month) - 1) ++ " " ++ year
    | _ => ""
    };
  <time
    className="inline-block text-sm lg:text-lg opacity-75 mb-4 lg:mb-8"
    dateTime=dateString>
    {React.string(formattedDate)}
  </time>;
};
