import PropTypes from 'prop-types'
import { Component } from 'react'

export default WrappedComponent => {
  class Themed extends Component {
    render () {
      const {
        background,
        color
      } = this.context

      return (
        <WrappedComponent background={background} color={color} {...this.props}>
          {this.props.children}
        </WrappedComponent>
      )
    }
  }

  Themed.contextTypes = {
    background: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
  }

  return Themed
}
