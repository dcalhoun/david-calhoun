import React  from 'react';
import Router, {Route, DefaultRoute} from 'react-router';
import Root from './components/Root.jsx';
import Home from './components/Index.jsx';
import About from './components/About.jsx';

export default (
  <Route path='/' handler={Root}>
    <DefaultRoute handler={Home}/>
    <Route path='/about' handler={About}/>
  </Route>
);
