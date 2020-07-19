// TODO: Replace with Belt.Option.getWithDefault
let stripEmpty = string => {
  switch (string) {
  | None => ""
  | Some(string) => " " ++ string
  };
};
