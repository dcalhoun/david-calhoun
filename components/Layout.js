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
  background-color: #D25C5E;
  margin: 0.5rem;
  padding: 1rem;
`

const LayoutInner = styled.div`
  @media (min-width: 54rem) {
    width: 83.333%;
  }

  @media (min-width: 64rem) {
    width: 66.667%;
  }
`

export default (props) => (
  <StyletronProvider styletron={getStyletron()}>
    <Layout props={props}>
      <Head>
        <title>{getTitle(props.title)}</title>
      </Head>
      <LayoutInner>
        <Header />
        {props.children}
      </LayoutInner>
    </Layout>
  </StyletronProvider>
)
