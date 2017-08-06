import { Component } from 'react'
import { initGA, logPageView } from '../utils/analytics'

class Analytics extends Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }

    logPageView()
  }

  render () {
    return this.props.children
  }
}

export default Analytics
