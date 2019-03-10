import PropTypes from "prop-types";
import React from "react";
import { Link as GatsbyLink } from "gatsby";

function Link({ children, href, to, activeClassName, ...rest }) {
  const internal = /^\/(?!\/)/.test(to);

  if (!to && !href) {
    return (
      <button type="button" {...rest}>
        {children}
      </button>
    );
  } else if (internal) {
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...rest}>
        {children}
      </GatsbyLink>
    );
  } else {
    return (
      <a href={to || href} {...rest}>
        {children}
      </a>
    );
  }
}

Link.propTypes = {
  ...GatsbyLink.propTypes,
  children: PropTypes.node
};

export default Link;
