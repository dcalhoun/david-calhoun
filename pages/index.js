import Layout from '../components/Layout'
import { styled } from 'styletron-react'

const Title = styled('h1', {
  color: 'red',
  fontSize: '50px'
})

export default () => (
  <Layout>
    <Title>My page</Title>
  </Layout>
)
