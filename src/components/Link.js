import PropTypes from "prop-types";
import React from "react";
import { Link as GatsbyLink } from "gatsby";

function Link({ children, to, activeClassName, ...other }) {
  const internal = /^\/(?!\/)/.test(to);
  if (!to) {
    return (
      <button type="button" {...other}>
        {children}
      </button>
    );
  }

  if (internal) {
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...other}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={to} {...other}>
      {children}
    </a>
  );
}

Link.propTypes = {
  ...GatsbyLink.propTypes,
  children: PropTypes.node
};

export default Link;
