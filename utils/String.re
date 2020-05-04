let stripEmpty = string => {
  switch (string) {
  | None => ""
  | Some(string) => " " ++ string
  };
};
