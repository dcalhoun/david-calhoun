'use strict';

import React from 'react';
import Router, {Link} from 'react-router';

const Footer = () => (
  <footer className='flex flex-wrap mxn1 py2'>
    <Link className='h6 btn btn-link p1' to='/'>David Calhoun</Link>
    <div className='flex-auto' />
    <nav className='flex flex-baseline'>
      <Link to='/posts' className='h6 btn btn-link p1'>Writing</Link>
      <a className='h6 btn btn-link p1' href="http://twitter.com/david_calhoun">Twitter</a>
      <a className='h6 btn btn-link p1' href="http://github.com/dcalhoun">GitHub</a>
    </nav>
  </footer>
);

export default Footer;
