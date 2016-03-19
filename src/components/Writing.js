import React from 'react';
import Paths from './PathsMixin';
import PostTeaser from './PostTeaser';

const Writing = React.createClass({
  mixins: [Paths],

  render() {
    const self = this;
    const postPaths = this.getAllPosts();

    const postNodes = postPaths.map(function (path, i) {
      let slug = path.split('/').pop();
      let post = self.getPost(slug);

      return (
        <PostTeaser key={i} slug={slug} path={path} title={post.attributes.title} body={post.body} />
      );
    });

    return (
      <main className='my2'>
        {postNodes}
      </main>
    );
  }
});

export default Writing;
