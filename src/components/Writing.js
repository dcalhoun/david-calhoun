'use strict'

import Paths from './PathsMixin'
import PostTeaser from './PostTeaser'
import React from 'react'
import Title from 'react-title-component'

const Writing = React.createClass({
  mixins: [Paths],

  render (props) {
    const self = this
    const postPaths = this.getAllPosts()

    const postNodes = postPaths.map(function (path, i) {
      let slug = path.split('/').pop()
      let post = self.getPost(slug)

      return (
        <PostTeaser
          key={i}
          slug={slug}
          path={path}
          title={post.attributes.title}
          body={post.body} />
      )
    })

    return (
      <main className='my2'>
        <Title render={(previous) => `Writing | ${previous}`} />
        {postNodes}
      </main>
    )
  }
})

export default Writing
