import React  from 'react';
import Router, {Route, IndexRoute} from 'react-router';
import App from './components/App.jsx';
import Index from './components/Index.jsx';
import About from './components/About.jsx';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Index}/>
    <Route path='/about' component={About}/>
  </Route>
);
