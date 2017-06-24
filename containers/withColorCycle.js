import colors from '../utils/colors.json'
import { Component } from 'react'
import { getRandomInRange } from '../utils/math'

export default (WrappedComponent) => (
  class ColorCycle extends Component {
    constructor (props) {
      super(props)

      this.state = {
        color: colors.base
      }

      this.cycle = this.cycle.bind(this)
    }

    cycle () {
      const names = [
        'black',
        'blue',
        'cyan',
        'fuschia',
        'gray',
        'green',
        'indigo',
        'lime',
        'orange',
        'pink',
        'red',
        'teal',
        'violet',
        'yellow'
      ]

      const name = names[getRandomInRange(0, 13)]
      const level = getRandomInRange(0, 9)

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
          {this.props.children}
        </WrappedComponent>
      )
    }
  }
)
