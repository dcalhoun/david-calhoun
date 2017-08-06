import PropTypes from 'prop-types'
import { Component } from 'react'

const light = {
  background: '#f8f7f5',
  color: '#42413f'
}

const dark = {
  background: '#4c4c4c',
  color: '#f2f2f2'
}

class DarkMode extends Component {
  constructor (props) {
    super(props)

    this.state = { enabled: false }
    this.toggle = this.toggle.bind(this)
  }

  getChildContext () {
    return {
      background: this.state.enabled ? dark.background : light.background,
      color: this.state.enabled ? dark.color : light.color,
      onClick: this.toggle
    }
  }

  toggle () {
    this.setState(prevState => ({ enabled: !prevState.enabled }))
  }

  render () {
    return this.props.children
  }
}

DarkMode.childContextTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default DarkMode
