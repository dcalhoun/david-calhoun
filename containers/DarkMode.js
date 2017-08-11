import colors from '../utils/colors.json'
import PropTypes from 'prop-types'
import { Component } from 'react'

const light = {
  background: '#feffff',
  color: '#4c4d4e',
  linkColor: colors['blue'][4]
}

const dark = {
  background: '#1e2424',
  color: '#979899',
  linkColor: colors['yellow'][4]
}

class DarkMode extends Component {
  constructor (props) {
    super(props)

    this.state = { enabled: this.getInitialEnabled() }
    this.toggle = this.toggle.bind(this)

    this.restorePreviousEnabled()
  }

  getInitialEnabled () {
    return (
      typeof window !== 'undefined' &&
      window.localStorage.getItem('darkmode') === 'true' &&
      window.initialBuildComplete
    )
  }

  restorePreviousEnabled () {
    const darkModePreviouslyEnabled = () => (
      typeof window !== 'undefined' &&
      window.localStorage.getItem('darkmode') === 'true' &&
      !window.initialBuildComplete
    )

    if (darkModePreviouslyEnabled()) {
      setTimeout(
        () => this.setState({ enabled: true }),
        0
      )

      window.initialBuildComplete = true
    }
  }

  getChildContext () {
    return {
      background: this.state.enabled ? dark.background : light.background,
      color: this.state.enabled ? dark.color : light.color,
      onClick: this.toggle,
      linkColor: this.state.enabled ? dark.linkColor : light.linkColor
    }
  }

  toggle () {
    this.setState(prevState => ({ enabled: !prevState.enabled }))
  }

  componentDidUpdate () {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('darkmode', this.state.enabled)
    }
  }

  render () {
    return this.props.children
  }
}

DarkMode.childContextTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  linkColor: PropTypes.string
}

export default DarkMode
