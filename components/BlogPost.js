import ButtonTweet from './ButtonTweet'
import CodeBlock from './CodeBlock'
import IssueCTA from './IssueCTA'
import Markdown from 'react-markdown'
import connectStyles from 'styletron-connect'

const BlogPost = ({
  date,
  body,
  styles,
  title
}) => (
  <article>
    <span className={styles.postDate}>
      {date.replace(/-/g, '.')}
    </span>

    <h1 className={styles.postTitle}>{title}</h1>
    <Markdown
      className={styles.postBody}
      renderers={Object.assign({}, Markdown.renderers, { CodeBlock: CodeBlock })}
      source={body}
    />

    <ButtonTweet title={title} />
    <IssueCTA title={title} />
  </article>
)

export default connectStyles(BlogPost, {
  postTitle: {
    fontFamily: 'Avenir Next, sans-serif',
    fontSize: '1.5rem',
    fontWeight: 'normal',
    marginTop: '0rem',
    '@media (min-width: 48rem)': {
      fontSize: '2.625rem'
    }
  },
  postDate: {
    color: '#999',
    fontSize: '0.75rem',
    display: 'inline-block'
  },
  postBody: {
    fontFamily: 'Avenir Next, sans-serif',
    fontSize: '1.125rem',
    '@media (min-width: 48rem)': {
      fontSize: '1.5rem'
    }
  },
  postBodyFirstParagraph: {
    marginTop: 0
  }
})
