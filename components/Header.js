import Link from 'next/link'
import connectStyles from 'styletron-connect'

const Header = ({ styles }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <Link href='/'>
        <a className={styles.anchor}>David Calhoun</a>
      </Link>
    </h1>
    <div className={styles.spacer} />
    <nav className={styles.nav}>
      <Link href='/writing'>
        <a className={styles.link}>Writing</a>
      </Link>
      <a
        className={styles.link}
        href='http://twitter.com/david_calhoun'
      >
        Twitter
      </a>
      <a
        className={styles.link}
        href='http://github.com/dcalhoun'
      >
        GitHub
      </a>
    </nav>
  </header>
)

export default connectStyles(Header, {
  header: {
    display: 'flex',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
    flexWrap: 'flex-wrap',
    padding: '2rem 0'
  },
  title: {
    display: 'inline-block',
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: '0 1rem 0 0'
  },
  anchor: {
    color: '#555',
    textDecoration: 'none'
  },
  spacer: {
    flex: '1 1 auto'
  },
  nav: {
    display: 'flex',
    margin: '0 -0.5rem'
  },
  link: {
    color: '#555',
    fontSize: '0.75rem',
    padding: '0.5rem',
    textDecoration: 'none'
  }
})
