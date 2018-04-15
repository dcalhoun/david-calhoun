import PropTypes from 'prop-types'
import { Component } from 'react'

class Theme extends Component {
  render () {
    const { background, color, enabled, onClick, linkColor } = this.context

    return this.props.children({
      background,
      color,
      enabled,
      onClick,
      linkColor
    })
  }
}

Theme.contextTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  enabled: PropTypes.bool,
  onClick: PropTypes.func,
  linkColor: PropTypes.string
}

export default Theme
