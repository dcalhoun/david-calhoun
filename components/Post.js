import React from "react";
import SEO from "./SEO";

export default props => (
  <>
    <SEO title={`${props.title} | David Calhoun, Software Engineer`} />
    <h2 className="text-xs lg:text-lg opacity-50">
      {props.published.replace(/-/g, ".")}
    </h2>
    <h1 className="lg:text-4xl">{props.title}</h1>
    {props.children}
  </>
);
