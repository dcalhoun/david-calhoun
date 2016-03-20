'use strict'

import React from 'react'

const sx = {
  status: {
    fontSize: '0.75rem'
  }
}

const About = (props) => (
  <section className='mb3'>
    <p className='h0 m0' style={sx.byline}>
      Designer/developer specializing in front-end architecture & UX design. Experienced with
      React.js, Ember.js, Backbone.js, & Ruby on Rails.
    </p>
    <p className='h4 bold' style={sx.status}>
      Currently at <a href='https://www.gonoodle.com'>GoNoodle</a> in Nashville, TN.
    </p>
  </section>
)

export default About
