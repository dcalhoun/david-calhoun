import {byline} from '../data';
import React from 'react';

const About = React.createClass({
  render() {
    return (
      <section>
        <p dangerouslySetInnerHTML={{ __html: byline }} />
      </section>
    );
  }
});

export default About;
