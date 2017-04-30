import connectStyles from 'styletron-connect'

const ProjectCard = ({
  description,
  href,
  name,
  styles
}) => (
  <a href={href} className={styles.card}>
    <h3 className={styles.title}>{name}</h3>
    <p className={styles.description}>{description}</p>
  </a>
)

export default connectStyles(ProjectCard, {
  card: {
    color: '#555',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
    flex: '0 0 auto',
    marginBottom: '2rem',
    padding: '0 1rem',
    textDecoration: 'none',
    width: '18rem'
  },
  title: {
    fontWeight: 600,
    marginBottom: '0.5em',
    marginTop: 0
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.5em',
    marginBottom: 0,
    marginTop: 0
  }
})
