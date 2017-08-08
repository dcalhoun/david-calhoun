import TextLink from './TextLink'
import Theme from '../containers/Theme'
import { styled } from 'styletron-react'

const CTA = styled('p', props => ({
  color: props.color,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
  fontSize: '1.125rem',
  marginTop: 0
}))

export default props => (
  <Theme>
    {({ color }) => (
      <CTA color={color}>
        Questions, Comments, Suggestions?
        {' '}
        <TextLink
          href={`https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title=${props.title}`}
          target='_blank'
        >
          Open an Issue
        </TextLink>.
      </CTA>
    )}
  </Theme>
)
