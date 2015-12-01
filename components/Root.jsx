import React, {PropTypes} from 'react';
import {RouteHandler} from 'react-router';
import Header from './Header.jsx';

export default class Root extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Hello</title>
        </head>
        <body>
          <Header/>
          <RouteHandler/>
          <script src='bundle.js' />
        </body>
      </html>
    );
  }
}
