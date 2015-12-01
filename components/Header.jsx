var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <header>
        <a href='/'>Index</a>
        <a href='/about'>About</a>
      </header>
    );
  }
});

module.exports = Header;
