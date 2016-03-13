import React from 'react';
import Header from './Header';

const App = React.createClass({
  render() {
    const {children} = this.props;

    return (
      <div className='md-col-10 lg-col-8 mx-auto p2'>
        <Header/>
        {children}
      </div>
    );
  }
});

export default App;
