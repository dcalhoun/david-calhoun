import React, { Component } from 'react'
import colors from '../utils/colors.json'
import { getRandomInRange } from '../utils/math'

export default (WrappedComponent) => (
  class ColorCycle extends Component {
    constructor (props) {
      super(props)

      this.state = {
        background: colors.base,
        color: '#fff'
      }

      this.names = Object.keys(colors).filter(c => (c !== 'black' && c !== 'base'))
      this.cycle = this.cycle.bind(this)
    }

    cycle () {
      const name = this.names[getRandomInRange(0, 13)]
      const level = getRandomInRange(4, 9)

      this.setState({
        background: colors[name][level]
      })
    }

    render () {
      return (
        <WrappedComponent
          background={this.state.background}
          color={this.state.color}
          onClick={this.cycle}
        >
          {React.Children.map(
            this.props.children,
            child => (
              React.cloneElement(child, {
                background: this.state.background,
                color: this.state.color
              })
            )
          )}
        </WrappedComponent>
      )
    }
  }
)
