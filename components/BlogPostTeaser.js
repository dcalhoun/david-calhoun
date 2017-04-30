import Link from './Link'
import connectStyles from 'styletron-connect'

const BlogPostTeaser = ({
  date,
  path,
  styles,
  title
}) => (
  <article className={styles.blogPostTeaser}>
    <h6 className={styles.date}>{date}</h6>
    <h1 className={styles.title}>
      <Link href={path}>
        {title}
      </Link>
    </h1>
  </article>
)

export default connectStyles(BlogPostTeaser, {
  blogPostTeaser: {
    marginBottom: '1rem',
    maxWidth: '44rem'
  },
  date: {
    color: '#999',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
    fontSize: '0.75rem',
    fontWeight: 400,
    margin: 0
  },
  title: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
    fontSize: '1.5rem',
    fontWeight: 400,
    marginTop: '0',
    '@media (min-width: 32rem)': {
      fontSize: '2.625rem'
    }
  }
})
