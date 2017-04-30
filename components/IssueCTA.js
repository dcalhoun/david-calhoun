import Link from './Link'

export default ({ title }) => (
  <p>
    Questions, Comments, Suggestions?
    {' '}
    <Link
      href={`https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title=${title}`}
      target='_blank'
    >
      Open an Issue
    </Link>.
  </p>
)
