import React from "react";

function withLevel(level) {
  // eslint-disable-next-line react/display-name
  const WrappedComponent = Component => props => (
    <Component level={level} {...props} />
  );

  WrappedComponent.displayName = `withLevel(${WrappedComponent.displayName})`;

  return WrappedComponent;
}

export default withLevel;
