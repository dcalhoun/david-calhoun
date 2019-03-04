import PropTypes from "prop-types";
import { Component } from "react";
import { injectStyle } from "styletron-utils";

class Heading extends Component {
  classNames(level) {
    // TODO: Why does a normal `styled` component's classes get
    //       lost on the way into `react-markdown`?
    return injectStyle(this.context.styletron, {
      fontSize: level < 4 ? "1.125rem" : "0.875rem",
      fontWeight: level < 4 ? "bold" : "normal",
      marginBottom: "0.5em",
      marginTop: "1.75em",
      textTransform: level < 4 ? "none" : "uppercase",

      "@media (min-width: 40rem)": {
        fontSize: level < 4 ? "1.5rem" : "1rem"
      }
    });
  }

  render() {
    const TagName = `h${this.props.level}`;

    return (
      <TagName className={this.classNames(this.props.level)}>
        {this.props.children}
      </TagName>
    );
  }
}

Heading.contextTypes = {
  styletron: PropTypes.object
};

export default Heading;
