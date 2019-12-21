import React from "react";

export default props => (
  <>
    <h2>{props.published.replace(/-/g, ".")}</h2>
    <h1>{props.title}</h1>
    {props.children}
  </>
);
