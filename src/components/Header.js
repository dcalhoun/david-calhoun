'use strict'

import React from 'react'
import {Link} from 'react-router'

const Header = (props) => (
  <header className='py3'>
    <h1 className='m0'>
      <Link to='/'>David Calhoun</Link>
    </h1>
    <nav className='mxn1'>
      <Link to='/posts' className='btn btn-link px1'>Writing</Link>
      <a className='btn btn-link px1' href='http://twitter.com/david_calhoun'>Twitter</a>
      <a className='btn btn-link px1' href='http://github.com/dcalhoun'>GitHub</a>
    </nav>
  </header>
)

export default Header
