import Markdown from 'react-markdown';
import Paths from './PathsMixin';
import React from 'react';

const Post = React.createClass({
  mixins: [Paths],

  render() {
    const post = this.getPost();

    return (
      <article>
        <h1>{post.attributes.title}</h1>
        <Markdown source={post.body}/>
      </article>
    );
  }
});

export default Post;
