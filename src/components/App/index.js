'use strict'

import './index.css'
import Header from '../Header'
import React from 'react'
import Title from 'react-title-component'

const App = React.createClass({
  render () {
    const { children } = this.props

    return (
      <div className='md-col-10 lg-col-8 mx-auto px2'>
        <Title render='David Calhoun, Software Engineer' />
        <Header />
        {children}
      </div>
    )
  }
})

export default App
