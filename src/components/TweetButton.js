import React from 'react'

const TweetButton = React.createClass({
  render () {
    const script = 'window.twttr=function(t,e,r){var n,i=t.getElementsByTagName(e)[0],w=window.twttr||{};return t.getElementById(r)?w:(n=t.createElement(e),n.id=r,n.src="https://platform.twitter.com/widgets.js",i.parentNode.insertBefore(n,i),w._e=[],w.ready=function(t){w._e.push(t)},w)}(document,"script","twitter-wjs");'

    return (
      <div className='inline-block mb2'>
        <a href='https://twitter.com/share'
          className='twitter-share-button'
          data-text={this.props.title}
          data-via='david_calhoun'
          data-size='large'>
          Tweet
        </a>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </div>
    )
  }
})

export default TweetButton
