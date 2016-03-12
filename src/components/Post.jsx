import React from 'react';
import Markdown from 'react-remarkable';

export default class Post extends React.Component {
  render() {
    const {title, body} = this.props;

    return (
      <article>
        <h1>{title}</h1>
        <Markdown source={body}/>
      </article>
    );
  }
}
