import {byline} from '../data';
import React from 'react';

const About = React.createClass({
  render() {
    return (
      <section>
        <p>{byline}</p>
      </section>
    );
  }
});

export default About;
