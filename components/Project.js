import React from "react";

export default props => (
  <div className="p-4">
    <h4 className="font-mono text-md lg:text-lg mb-2">{props.name}</h4>
    <p className="text-sm lg:text-lg italic opacity-75">{props.description}</p>
  </div>
);
