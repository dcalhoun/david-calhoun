[@react.component]
let default = () => {
  <>
    <TextButton className="hello" onClick={_event => ()}>
      {React.string("Click Me!")}
    </TextButton>
  </>;
};
