import colors from '../utils/colors.json'
import { Component } from 'react'
import { getRandomInRange } from '../utils/math'

export default (WrappedComponent) => (
  class ColorCycle extends Component {
    constructor (props) {
      super(props)

      this.state = {
        backgroundColor: colors.base,
        color: '#fff'
      }

      this.names = Object.keys(colors).filter(c => (c !== 'black' && c !== 'base'))
      this.cycle = this.cycle.bind(this)
    }

    cycle () {
      const name = this.names[getRandomInRange(0, 13)]
      const level = getRandomInRange(0, 9)

      this.setState({
        backgroundColor: colors[name][level],
        color: level > 3 ? '#fff' : colors['black']
      })
    }

    render () {
      return (
        <WrappedComponent
          backgroundColor={this.state.backgroundColor}
          color={this.state.color}
          onClick={this.cycle}
        >
          {this.props.children}
        </WrappedComponent>
      )
    }
  }
)
