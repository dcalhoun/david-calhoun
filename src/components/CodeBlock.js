import highlight from 'highlight.js';
import React from 'react';
import styles from '../syntax.css';

const CodeBlock = React.createClass({
  displayName: 'CodeBlock',
  propTypes: {
    literal: React.PropTypes.string,
    language: React.PropTypes.string
  },

  componentDidMount() {
    highlight.highlightBlock(this.refs.code);
  },

  render() {
    return (
      <pre>
        <code ref='code' className={this.props.language}>{this.props.literal}</code>
      </pre>
    )
  }
});

export default CodeBlock;
