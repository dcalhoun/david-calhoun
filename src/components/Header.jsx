import React from 'react';
import Router, {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>David Calhoun</h1>
        <Link to='/' className='btn'>Index</Link>
        <Link to='/writing' className='btn'>Writing</Link>
      </header>
    );
  }
}
