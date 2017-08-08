import PropTypes from 'prop-types'
import { Component } from 'react'

class Theme extends Component {
  render () {
    const {
      background,
      color,
      onClick,
      linkColor
    } = this.context

    return this.props.children({ background, color, onClick, linkColor })
  }
}

Theme.contextTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  linkColor: PropTypes.string
}

export default Theme
