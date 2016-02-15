import React from 'react';
import PostTeaser from './PostTeaser.jsx';

export default class Writing extends React.Component {
  render() {
    let posts = [];
    for (let item in [1,2,3]) {
      let slug = `foo-${item}`;
      let title = `Foo ${item}`;
      let body = `Body foo ${item}.`;

      posts.push(<PostTeaser key={item} slug={slug} title={title} body={body}/>);
    };

    return (
      <main>
        <h2>Writing</h2>
        {posts}
      </main>
    );
  }
}
