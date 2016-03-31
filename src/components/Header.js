'use strict'

import { Link } from 'react-router'
import React from 'react'

const Header = React.createClass({
  render (props) {
    return (
      <header className='flex flex-wrap py3'>
        <h1 className='h2 m0 inline-block'>
          <Link to='/'>David Calhoun</Link>
        </h1>
        <div className='flex-auto' />
        <nav className='flex flex-baseline mxn1'>
          <Link to='/posts' className='h6 btn p1'>Writing</Link>
          <a className='h6 btn p1' href='http://twitter.com/david_calhoun'>Twitter</a>
          <a className='h6 btn p1' href='http://github.com/dcalhoun'>GitHub</a>
        </nav>
      </header>
    )
  }
})

export default Header
