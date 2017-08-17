import Theme from '../containers/Theme'
import chroma from 'chroma-js'
import { cursorOnly } from '../utils/style'
import { styled } from 'styletron-react'

const TextLink = styled('a', props => ({
  borderBottom: `2px solid ${chroma(props.linkColor).alpha(0.8).css()}`,
  boxShadow: `inset 0 -0.5625rem 0 ${chroma(props.linkColor).alpha(0.15).css()}`,
  color: props.color,
  textDecoration: 'none',
  transitionDuration: '160ms',
  transitionProperty: 'border-color, box-shadow',
  transitionTimingFunction: 'ease',

  ':hover': cursorOnly({
    boxShadow: `inset 0 -1.2em 0 ${chroma(props.linkColor).alpha(0.25).css()}`
  })
}))

export default props => (
  <Theme>
    {({ color, linkColor }) => (
      <TextLink
        color={color}
        href={props.href}
        linkColor={linkColor}
        {...props}
      >
        {props.children}
      </TextLink>
    )}
  </Theme>
)
