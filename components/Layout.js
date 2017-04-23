import Header from './Header'
import getStyletron from '../utils/styletron'
import { StyletronProvider } from 'styletron-react'

const layoutStyle = {}

const Layout = (props) => (
  <StyletronProvider styletron={getStyletron()}>
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  </StyletronProvider>
)

export default Layout
