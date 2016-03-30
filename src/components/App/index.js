'use strict'

import './index.css'
import Footer from '../Footer'
import Header from '../Header'
import React from 'react'
import Title from 'react-title-component'

const App = React.createClass({
  render (props) {
    const {children} = this.props

    return (
      <div className='md-col-10 lg-col-8 mx-auto px2'>
        <Title render='David Calhoun, Designer & Developer' />
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
})

export default App
