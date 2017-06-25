import Link from 'next/link'
import TextLink from './TextLink'
import styled from 'styled-components'

const Header = styled.header`
  align-items: baseline;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif;
  flex-wrap: flex-wrap;
  justify-content: space-between;
  margin: 0 0 3rem;
  padding: 3rem 1rem 0;
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

const Anchor = styled.a`
  color: ${props => props.color};
  text-decoration: none;
`

export default (props) => (
  <Header>
    <Title>
      <Leader color={props.color} onClick={props.onClick}>#</Leader>
      <Link href='/'>
        <Anchor color={props.color}>
          David Calhoun
        </Anchor>
      </Link>
    </Title>
    <nav>
      <Link href='/writing'>
        <Anchor color={props.color}>Writing</Anchor>
      </Link>
      <TextLink href='http://twitter.com/david_calhoun'>Twitter</TextLink>
      {' '}
      <TextLink href='http://github.com/dcalhoun'>GitHub</TextLink>
    </nav>
  </Header>
)
