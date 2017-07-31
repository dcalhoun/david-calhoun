import Lowlight from 'react-lowlight'
import PropTypes from 'prop-types'
import bash from 'highlight.js/lib/languages/bash'
import http from 'highlight.js/lib/languages/http'
import js from 'highlight.js/lib/languages/javascript'
import { Component } from 'react'

Lowlight.registerLanguage('bash', bash)
// TODO: Why is there not an HTML language??
Lowlight.registerLanguage('html', http)
Lowlight.registerLanguage('js', js)

class CodeBlock extends Component {
  render () {
    return (
      <Lowlight
        inline={this.props.inline}
        language={this.props.language || 'js'}
        value={this.props.literal}
      />
    )
  }
}

CodeBlock.propTypes = {
  inline: PropTypes.bool,
  language: PropTypes.string,
  literal: PropTypes.string
}

export default CodeBlock
