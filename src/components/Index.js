import React from 'react';
import About from './About';
import Projects from './Projects';

export default class Index extends React.Component {
  render() {
    return (
      <main>
        <About/>
        <Projects/>
      </main>
    );
  }
}
