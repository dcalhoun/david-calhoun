'use strict'

import './index.css'
import CodeBlock from '../CodeBlock'
import Markdown from 'react-markdown'
import Paths from '../PathsMixin'
import React from 'react'
import Title from 'react-title-component'

const Post = React.createClass({
  mixins: [Paths],

  render () {
    const post = this.getPost()

    return (
      <article className='Post'>
        <Title render={(prev) => `${post.attributes.title} | ${prev}`} />
        <h1 className='Post-title'>{post.attributes.title}</h1>
        <Markdown
          className='Post-body'
          renderers={Object.assign({}, Markdown.renderers, { CodeBlock: CodeBlock })}
          source={post.body} />
      </article>
    )
  }
})

export default Post
