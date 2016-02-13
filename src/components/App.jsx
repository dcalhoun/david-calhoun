import React from 'react';
import Header from './Header';

export default class App extends React.Component {
  render() {
    const {children} = this.props;

    return (
      <div>
        <Header/>
        {children}
      </div>
    );
  }
}
