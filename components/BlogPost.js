import connectStyles from 'styletron-connect'

const BlogPost = ({
  date,
  path,
  styles,
  title
}) => (
  <article className={styles.blogPost}>
    <h6 className={styles.date}>{date}</h6>
    <h1 className={styles.title}>
      <a className={styles.link} href={path}>
        {title}
      </a>
    </h1>
  </article>
)

export default connectStyles(BlogPost, {
  blogPost: {
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
  },
  link: {
    color: '#555'
  }
})
