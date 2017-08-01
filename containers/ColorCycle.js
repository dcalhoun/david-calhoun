import PropTypes from 'prop-types'
import { Component } from 'react'
import colors from '../utils/colors.json'
import { getRandomInRange } from '../utils/math'

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

  getChildContext () {
    return {
      background: this.state.background,
      color: this.state.color,
      onClick: this.cycle
    }
  }

  cycle () {
    const name = this.names[getRandomInRange(0, 13)]
    const level = getRandomInRange(4, 9)

    this.setState({
      background: colors[name][level]
    })
  }

  render () {
    return this.props.children
  }
}

ColorCycle.childContextTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default ColorCycle
