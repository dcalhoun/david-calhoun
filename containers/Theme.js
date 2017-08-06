import PropTypes from 'prop-types'
import { Component } from 'react'

class Theme extends Component {
  render () {
    const {
      background,
      color,
      onClick
    } = this.context

    return this.props.children(background, color, onClick)
  }
}

Theme.contextTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Theme
