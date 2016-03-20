'use strict'

import '../syntax.css'
import highlight from 'highlight.js'
import React from 'react'

const CodeBlock = React.createClass({
  propTypes: {
    literal: React.PropTypes.string,
    language: React.PropTypes.string
  },

  componentDidMount () {
    highlight.highlightBlock(this.refs.code)
  },

  render () {
    return (
      <pre>
        <code ref='code' className={this.props.language}>{this.props.literal}</code>
      </pre>
    )
  }
})

export default CodeBlock
