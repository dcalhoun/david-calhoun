import React from "react";
import Link from "next/link";

export default props => (
  <div>
    <Link href="/">Home</Link>{" "}
    <Link href="/writing/developer-tools-homebrew">First</Link>
    {props.children}
  </div>
);
