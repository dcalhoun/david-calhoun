'use strict'

import React from 'react'

const About = React.createClass({
  render () {
    return (
      <section className='mb4'>
        <p className='h00 alegreya m0'>
          Software engineer <br className='xs-hide' />
          specializing in UX design <br className='xs-hide' />
          & front-end architecture.
        </p>
        <p className='h5 bold mb0'>
          Currently at <a href='https://www.gonoodle.com'>GoNoodle</a>. <br className='sm-hide md-hide lg-hide' />
          Based in Nashville, TN.
        </p>
      </section>
    )
  }
})

export default About
