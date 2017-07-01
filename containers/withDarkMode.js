import React, { Component } from 'react'

const light = {
  background: '#f8f7f5',
  color: '#42413f'
}

const dark = {
  background: '#4c4c4c',
  color: '#f2f2f2'
}

export default (WrappedComponent) => (
  class DarkMode extends Component {
    constructor (props) {
      super(props)

      this.state = { enabled: false }
      this.toggle = this.toggle.bind(this)
    }

    toggle () {
      this.setState(prevState => ({ enabled: !prevState.enabled }))
    }

    render () {
      return (
        <WrappedComponent
          background={this.state.enabled ? dark.background : light.background}
          color={this.state.enabled ? dark.color : light.color}
          onClick={this.toggle}
        >
          {React.Children.map(
            this.props.children,
            child => (
              React.cloneElement(child, {
                background: this.state.enabled ? dark.background : light.background,
                color: this.state.enabled ? dark.color : light.color
              })
            )
          )}
        </WrappedComponent>
      )
    }
  }
)
