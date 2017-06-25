import Link from 'next/link'
import TextLink from './TextLink'
import styled from 'styled-components'

const Header = styled.header`
  font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif;
  margin: 3rem 0;
  padding: 0 1rem;

  @media (min-width: 40rem) {
    align-items: baseline;
    display: flex;
    flex-wrap: flex-wrap;
    justify-content: space-between;
  }
`

const Title = styled.h1`
  display: inline-block;
  font-family: Monaco, monospace;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
`

const Leader = styled.span`
  color: ${props => props.color};
  cursor: pointer;
  display: inline-block;
  font-family: Monaco, monospace;
  padding-right: 0.5rem;
  opacity: 0.5;
  transition-duration: 300ms;
  transition-property: opacity, transform;
  transition-timing-function: ease-in-out;

  &:hover {
    opacity: 1;
    transform: translateX(-0.25rem);
  }
`

export default (props) => (
  <Header>
    <Title>
      <Leader color={props.color} onClick={props.onClick}>#</Leader>
      <Link href='/'>
        <TextLink href='/' color={props.color}>
          David Calhoun
        </TextLink>
      </Link>
    </Title>
    <nav>
      <Link href='/writing' prefetch>
        <TextLink href='/' color={props.color}>Writing</TextLink>
      </Link>
      {' '}
      <TextLink href='http://twitter.com/david_calhoun'>Twitter</TextLink>
      {' '}
      <TextLink href='http://github.com/dcalhoun'>GitHub</TextLink>
    </nav>
  </Header>
)
