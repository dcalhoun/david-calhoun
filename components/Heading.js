import PropTypes from 'prop-types'
import { Component } from 'react'
import { injectStyle } from 'styletron-utils'

class Heading extends Component {
  classNames () {
    // TODO: Why does a normal `styled` component's classes get
    //       lost on the way into `react-markdown`?
    return injectStyle(
      this.context.styletron,
      {
        fontSize: '1.125rem',
        marginBottom: '0.5em',
        marginTop: '1.75em',

        '@media (min-width: 40rem)': {
          fontSize: '1.5rem'
        }
      }
    )
  }

  render () {
    const TagName = `h${this.props.level}`

    return (
      <TagName className={this.classNames()}>
        {this.props.children}
      </TagName>
    )
  }
}

Heading.contextTypes = {
  styletron: PropTypes.object
}

export default Heading
