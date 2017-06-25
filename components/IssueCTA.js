import TextLink from './TextLink'

export default (props) => (
  <p>
    Questions, Comments, Suggestions?
    {' '}
    <TextLink
      background={props.background}
      color={props.color}
      href={`https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title=${props.title}`}
      target='_blank'
    >
      Open an Issue
    </TextLink>.
  </p>
)
