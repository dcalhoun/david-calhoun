'use strict'

import { Link } from 'react-router'
import React from 'react'

const Header = React.createClass({
  render (props) {
    return (
      <header>
        <nav className='mt1 mxn1 right-align'>
          <Link to='/posts' className='h6 btn p1'>Writing</Link>
          <a className='h6 btn p1' href='http://twitter.com/david_calhoun'>Twitter</a>
          <a className='h6 btn p1' href='http://github.com/dcalhoun'>GitHub</a>
        </nav>
        <h1 className='h2 m0 py3'>
          <Link to='/'>David Calhoun</Link>
        </h1>
      </header>
    )
  }
})

export default Header
