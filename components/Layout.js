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
  position: relative;

  @media screen and (min-width: 54rem) {
    margin: 1rem;
    padding: 2rem;
  }
`

const LayoutInner = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 56.25rem;
`

export default (props) => (
  <StyletronProvider styletron={getStyletron()}>
    <Layout backgroundColor={props.backgroundColor}>
      <Head>
        <title>{getTitle(props.title)}</title>
      </Head>

      <LayoutInner>
        <Header onClick={props.onClick} />
        {props.children}
      </LayoutInner>
    </Layout>
  </StyletronProvider>
)
