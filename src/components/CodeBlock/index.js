'use strict'

import './index.css'
import highlight from 'highlightjs'
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
    const { language, literal } = this.props

    return (
      <pre>
        <code ref='code' className={language}>{literal}</code>
      </pre>
    )
  }
})

export default CodeBlock
