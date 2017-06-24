import React, { Component } from 'react'
import colors from '../utils/colors.json'
import { getRandomInRange } from '../utils/math'

export default (WrappedComponent) => (
  class ColorCycle extends Component {
    constructor (props) {
      super(props)

      this.state = {
        color: colors.base
      }

      this.names = Object.keys(colors).filter(c => (c !== 'black' && c !== 'base'))
      this.cycle = this.cycle.bind(this)
    }

    cycle () {
      const name = this.names[getRandomInRange(0, 13)]
      const level = getRandomInRange(4, 9)

      this.setState({
        color: colors[name][level]
      })
    }

    render () {
      return (
        <WrappedComponent
          color={this.state.color}
          onClick={this.cycle}
        >
          {React.Children.map(
            this.props.children,
            child => React.cloneElement(child, { color: this.state.color })
          )}
        </WrappedComponent>
      )
    }
  }
)
