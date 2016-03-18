import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = React.createClass({
  render() {
    const {children} = this.props;

    return (
      <div className='md-col-10 lg-col-8 mx-auto p2'>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
});

export default App;
