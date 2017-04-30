import ProjectCard from './ProjectCard'
import connectStyles from 'styletron-connect'

const Projects = ({ styles }) => (
  <section className={styles.projects}>
    <h2 className={styles.title}>Open Source</h2>
    <ProjectCard
      name='Alfred Remote Inspector'
      description='Remotely inspect any iOS device by name via Safari’s web inspector.'
      href='https://github.com/dcalhoun/alfred-remote-inspector-workflow'
    />
    <ProjectCard
      name='css-utils-margin'
      description='Immutable, CSS margin utilities.'
      href='http://github.com/dcalhoun/css-utils-margin'
    />
    <ProjectCard
      name='css-utils-padding'
      description='Immutable, CSS padding utilities.'
      href='http://github.com/dcalhoun/css-utils-padding'
    />
    <ProjectCard
      name='es6-migrate'
      description='CLI to convert AMD CoffeeScript to ES6 Standard JavaScript.'
      href='https://github.com/dcalhoun/es6-migrate'
    />
    <ProjectCard
      name='Playbook'
      description='A Yeoman generator for prototyping and building experiences.'
      href='http://playbook.centresource.com'
    />
    <ProjectCard
      name='postcss-warn-cleaner'
      description='Selectively remove PostCSS warnings from your logs.'
      href='http://github.com/dcalhoun/postcss-warn-cleaner'
    />
  </section>
)

export default connectStyles(Projects, {
  projects: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '-1rem',
    marginRight: '-1rem'
  },
  title: {
    color: '#555',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.2em',
    textStyle: 'uppercase',
    marginBottom: '1rem',
    marginTop: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    textTransform: 'uppercase',
    width: '100%'
  }
})
