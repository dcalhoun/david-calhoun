import highlight from 'highlightjs'
import { Component } from 'react'

class CodeBlock extends Component {
  componentDidMount () {
    highlight.highlightBlock(this.code)
  }

  render () {
    const {
      language,
      literal
    } = this.props

    return (
      <pre>
        <code ref={code => { this.code = code }} className={language}>
          {literal}
        </code>
      </pre>
    )
  }
}

export default CodeBlock
