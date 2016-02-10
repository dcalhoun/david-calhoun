import React from 'react';

export default class About extends React.Component {
  render() {
    const {byline} = this.props;

    return (
      <section>
        <p>{byline}</p>
      </section>
    );
  }
}
