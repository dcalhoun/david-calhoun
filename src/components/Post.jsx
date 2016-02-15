import React from 'react';

export default class Post extends React.Component {
  render() {
    const {title, body} = this.props;

    return (
      <article>
        <h1>{this.props.params.slug}</h1>
        {body}
      </article>
    );
  }
}
