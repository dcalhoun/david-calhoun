import Head from 'next/head'
import Header from './Header'
import getStyletron from '../utils/styletron'
import styled from 'styled-components'
import { StyletronProvider } from 'styletron-react'

function getTitle (title) {
  return title
    ? `${title} | David Calhoun, Software Engineer`
    : 'David Calhoun, Software Engineer'
}

const Layout = styled.div`
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor};
  margin: 0.5rem;
  padding: 1rem;
  position: relative;

  @media screen and (min-width: 54rem) {
    margin: 1rem;
    padding: 2rem;
  }
`

const LayoutInner = styled.div`
  @media (min-width: 54rem) {
    width: 83.333%;
  }

  @media (min-width: 64rem) {
    width: 66.667%;
  }
`

const Toggle = styled.button`
  background-color: ${props => props.color};
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  height: 1em;
  position: absolute;
  opacity: 0.25;
  right: 1rem;
  transition: opacity 300ms ease-in-out;
  top: 1rem;
  width: 1em;

  &:hover {
    opacity: 1;
  }
`

export default (props) => (
  <StyletronProvider styletron={getStyletron()}>
    <Layout backgroundColor={props.backgroundColor}>
      <Head>
        <title>{getTitle(props.title)}</title>
      </Head>
      <Toggle color={props.color} onClick={props.onClick} />
      <LayoutInner>
        <Header />
        {props.children}
      </LayoutInner>
    </Layout>
  </StyletronProvider>
)
