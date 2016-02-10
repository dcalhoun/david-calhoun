import React from 'react';
import Router, {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>David Calhoun</h1>
        <Link to='/'>Index</Link>
        <Link to='/blog'>Blog</Link>
      </header>
    );
  }
}
