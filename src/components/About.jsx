import data from '../data';
import React from 'react';

export default class About extends React.Component {
  render() {
    const {byline} = data;

    return (
      <section>
        <p>{byline}</p>
      </section>
    );
  }
}
