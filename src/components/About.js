'use strict'

import React from 'react'

const About = React.createClass({
  render (props) {
    return (
      <section className='mb4'>
        <p className='h0 athelas m0'>
          Web designer/developer <br className='sm-hide'/>
          specializing in UX design & <br className='sm-hide' />
          front-end architecture.
        </p>
        <p className='h5 bold'>
          Currently at <a href='https://www.gonoodle.com'>GoNoodle</a>. Based in Nashville, TN.
        </p>
      </section>
    )
  }
})

export default About
