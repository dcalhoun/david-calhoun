import React from "react";

export default props => (
  <div className="p-4">
    <h4 className="font-mono mb-2">{props.name}</h4>
    <p className="text-sm italic text-gray-700">{props.description}</p>
  </div>
);
