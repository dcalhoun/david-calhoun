'use strict'

import './index.css'
import CodeBlock from '../CodeBlock'
import Issue from '../Issue'
import Markdown from 'react-markdown'
import Paths from '../PathsMixin'
import React from 'react'
import Title from 'react-title-component'
import TweetButton from '../TweetButton'

const Post = React.createClass({
  mixins: [Paths],

  render () {
    const post = this.getPost()

    return (
      <article className='Post'>
        <Title render={(prev) => `${post.attributes.title} | ${prev}`} />
        <span className='Post-date'>{post.attributes.created.replace(/-/g, '.')}</span>
        <h1 className='Post-title'>{post.attributes.title}</h1>
        <Markdown
          className='Post-body'
          renderers={Object.assign({}, Markdown.renderers, { CodeBlock: CodeBlock })}
          source={post.body} />
        <TweetButton title={post.attributes.title} />
        <Issue title={post.attributes.title} />
      </article>
    )
  }
})

export default Post
