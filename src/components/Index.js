import React from 'react';
import About from './About';
import Projects from './Projects';

const Index = React.createClass({
  render() {
    return (
      <main>
        <About/>
        <Projects/>
      </main>
    );
  }
});

export default Index;
