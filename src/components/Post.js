'use strict'

import CodeBlock from './CodeBlock'
import Markdown from 'react-markdown'
import Paths from './PathsMixin'
import React from 'react'
import Title from 'react-title-component'

const Post = React.createClass({
  mixins: [Paths],

  render () {
    const post = this.getPost()

    return (
      <article>
        <Title render={(prev) => `${post.attributes.title} | ${prev}`} />
        <h1>{post.attributes.title}</h1>
        <Markdown
          source={post.body}
          renderers={Object.assign({}, Markdown.renderers, { CodeBlock: CodeBlock })} />
      </article>
    )
  }
})

export default Post
