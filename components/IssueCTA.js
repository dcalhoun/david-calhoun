import TextLink from './TextLink'

export default ({ title }) => (
  <p>
    Questions, Comments, Suggestions?
    {' '}
    <TextLink
      href={`https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title=${title}`}
      target='_blank'
    >
      Open an Issue
    </TextLink>.
  </p>
)
