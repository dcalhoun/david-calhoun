import PropTypes from "prop-types";
import React from "react";
import { Component } from "react";
import { injectStyle } from "styletron-utils";

class Paragraph extends Component {
  classNames() {
    // TODO: Why does a normal `styled` component's classes get
    //       lost on the way into `react-markdown`?
    return injectStyle(this.context.styletron, { marginTop: 0 });
  }

  render() {
    return <p className={this.classNames()}>{this.props.children}</p>;
  }
}

Paragraph.propTypes = {
  children: PropTypes.node
};

Paragraph.contextTypes = {
  styletron: PropTypes.object
};

export default Paragraph;
