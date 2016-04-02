'use strict'

const Fonts = `
  window.WebFontConfig = {
    google: { families: [ 'Alegreya:400,400italic,700:latin' ] }
  }

  var head = document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  script.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
  script.type = 'text/javascript'
  script.async = 'true'

  head.appendChild(script)
`

export default Fonts
