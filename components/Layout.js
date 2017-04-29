import Header from './Header'
import connectStyles from 'styletron-connect'
import getStyletron from '../utils/styletron'
import { StyletronProvider } from 'styletron-react'

const Layout = ({ styles, props }) => (
  <div className={styles.layout}>
    <Header />
    {props.children}
  </div>
)

const LayoutStyled = connectStyles(Layout, {
  layout: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 1rem',
    '@media (min-width: 54rem)': {
      width: '83.333%'
    },
    '@media (min-width: 64rem)': {
      width: '66.667%'
    }
  }
})

export default (props) => (
  <StyletronProvider styletron={getStyletron()}>
    <LayoutStyled props />
  </StyletronProvider>
)
