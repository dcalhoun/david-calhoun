import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = ({children, ...props}) => (
  <div className='md-col-10 lg-col-8 mx-auto p2'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default App;
