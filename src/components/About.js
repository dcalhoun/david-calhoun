import {byline} from '../data';
import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <section>
        <p>{byline}</p>
      </section>
    );
  }
}
