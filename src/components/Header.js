import React from 'react';
import Router, {Link} from 'react-router';

const Header = React.createClass({
  render() {
    return (
      <header>
        <h1>David Calhoun</h1>
        <nav className='mxn1'>
          <Link to='/' className='btn btn-link px1'>About</Link>
          <Link to='/posts' className='btn btn-link px1'>Writing</Link>
        </nav>
      </header>
    );
  }
});

export default Header;
