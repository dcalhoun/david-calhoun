import Head from 'next/head'
import connectStyles from 'styletron-connect'

const ButtonTweet = ({ styles, title }) => {
  const twitterScript = 'window.twttr=function(t,e,r){var n,i=t.getElementsByTagName(e)[0],w=window.twttr||{};return t.getElementById(r)?w:(n=t.createElement(e),n.id=r,n.src="https://platform.twitter.com/widgets.js",i.parentNode.insertBefore(n,i),w._e=[],w.ready=function(t){w._e.push(t)},w)}(document,"script","twitter-wjs");'

  return (
    <nav className={styles.buttonTweet}>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: twitterScript }} />
      </Head>
      <a href='https://twitter.com/share'
        className='twitter-share-button'
        data-text={title}
        data-via='david_calhoun'
        data-size='large'
      >
        Tweet
      </a>
    </nav>
  )
}

export default connectStyles(ButtonTweet, {
  buttonTweet: {
    display: 'inline-block',
    marginBottom: '1rem'
  }
})
