import React from 'react';
import {Link} from 'react-router';

export default class PostTeaser extends React.Component {
  render() {
    const {slug, title, body} = this.props;
    const path = `/posts/${slug}`;

    return (
      <article className='border-top mb2 pb2'>
        <h3>
          <Link to={path} {...this.props}>{title}</Link>
        </h3>
        {body}
      </article>
    );
  }
}
