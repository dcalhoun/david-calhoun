import chroma from 'chroma-js'
import styled from 'styled-components'

const TextLink = styled.a`
  background-position: 0 1.025em;
  background-repeat: repeat-x;
  background-size: 2px 2px;
  border-bottom: ${props => `2px solid ${chroma(props.background).darken(0.5)}`};
  box-shadow: ${props => `inset 0 -9px 0 ${chroma(props.background).darken(0.3).alpha(0.5)}`};
  color: #fff;
  text-decoration: none;
  transition-duration: 160ms;
  transition-property: border-color, box-shadow;
  transition-timing-function: ease;

  &:hover {
    box-shadow: ${props => `inset 0 -1.2em 0 ${chroma(props.background).darken(0.5).alpha(0.5)}`};
  }
`

export default ({
  background,
  color,
  children,
  href,
  ...other
}) => (
  <TextLink background={background} color={color} href={href} {...other}>
    {children}
  </TextLink>
)
