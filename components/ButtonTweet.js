import { Component } from 'react'
import { styled } from 'styletron-react'

const Anchor = styled('nav', {
  display: 'inline-block',
  marginBottom: '1.5em'
})

class ButtonTweet extends Component {
  constructor (props) {
    super(props)

    if (typeof window !== 'undefined') {
      this.widget = this.loadTwitterWidget()
    }
  }

  loadTwitterWidget () {
    return new Promise(resolve => {
      const firstScript = document.getElementsByTagName('script')[0]
      const twttrScript = document.createElement('script')
      twttrScript.id = 'twitter-wjs'
      twttrScript.addEventListener('load', () => {
        resolve()
      })
      twttrScript.src = '//platform.twitter.com/widgets.js'
      firstScript.parentNode.insertBefore(twttrScript, firstScript)
    })
  }

  componentDidMount () {
    this.widget &&
      this.widget.then(() => {
        window.twttr.widgets.createShareButton(
          window.location.href,
          this.anchor,
          {
            size: 'large',
            text: this.props.title,
            via: 'david_calhoun'
          }
        )
      })
  }

  // TODO: Move `ref` to `Anchor` when styletron@3.x.x is out.
  render () {
    return (
      <Anchor>
        <a
          ref={anchor => {
            this.anchor = anchor
          }}
        />
      </Anchor>
    )
  }
}

export default ButtonTweet
