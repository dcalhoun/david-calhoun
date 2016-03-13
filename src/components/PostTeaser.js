import Markdown from 'react-markdown';
import React from 'react';
import {Link} from 'react-router';

export default class PostTeaser extends React.Component {
  render() {
    const {slug, path, title, body} = this.props;

    return (
      <article className='border-top mb2 pb2'>
        <h3>
          <Link to={path}>{title}</Link>
        </h3>
        <Markdown source={body} />
      </article>
    );
  }
}
