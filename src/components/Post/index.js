'use strict'

import './index.css'
import CodeBlock from '../CodeBlock'
import Markdown from 'react-markdown'
import Paths from '../PathsMixin'
import React from 'react'
import Title from 'react-title-component'

const Post = React.createClass({
  mixins: [Paths],

  render (props) {
    const post = this.getPost()

    return (
      <article className='Post'>
        <Title render={(prev) => `${post.attributes.title} | ${prev}`} />
        <header className='Post-header'>
          <span className='Post-date'>{post.attributes.created.replace(/-/g, '.')}</span>
          <h1 className='Post-title'>{post.attributes.title}</h1>
        </header>
        <Markdown
          className='Post-body'
          renderers={Object.assign({}, Markdown.renderers, { CodeBlock: CodeBlock })}
          source={post.body} />
      </article>
    )
  }
})

export default Post
