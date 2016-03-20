'use strict'

import { Route, IndexRoute } from 'react-router'
import App from '../components/App'
import Index from '../components/Index'
import Post from '../components/Post'
import React from 'react'
import Writing from '../components/Writing'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Index}/>
    <Route path='/posts' component={Writing}/>
    <Route path='/posts/:slug' component={Post}/>
  </Route>
)
