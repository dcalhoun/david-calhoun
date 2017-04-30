import connectStyles from 'styletron-connect'

const Link = (props) => (
  <a className={props.styles.link} href={props.href} {...props}>
    {props.children}
  </a>
)

export default connectStyles(Link, {
  link: {
    backgroundImage: 'linear-gradient(180deg,transparent 50%,rgba(0,0,0,.6) 0)',
    backgroundPosition: '0 1.1em',
    backgroundRepeat: 'repeat-x',
    backgroundSize: '2px 2px',
    color: '#555',
    textDecoration: 'none',
    ':hover': {
      backgroundImage: 'linear-gradient(180deg,rgba(138,186,86,0) 50%,rgba(138,186,86,.6) 0)'
    }
  }
})
