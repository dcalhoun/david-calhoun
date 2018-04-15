import TextLink from './TextLink'
import Theme from '../containers/Theme'
import { fonts } from '../utils/style'
import { styled } from 'styletron-react'

const CTA = styled('p', props => ({
  color: props.color,
  fontFamily: fonts.base,
  fontSize: '1.125rem',
  marginTop: 0
}))

export default props => (
  <Theme>
    {({ color }) => (
      <CTA color={color}>
        Questions, Comments, Suggestions?{' '}
        <TextLink
          href={`https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title=${
            props.title
          }`}
          target='_blank'
        >
          Open an Issue
        </TextLink>.
      </CTA>
    )}
  </Theme>
)
