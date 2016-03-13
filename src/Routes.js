import React  from 'react';
import Router, {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Index from './components/Index';
import Writing from './components/Writing';
import Post from './components/Post';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Index}/>
    <Route path='/posts' component={Writing}/>
    <Route path='/posts/:slug' component={Post}/>
  </Route>
);
