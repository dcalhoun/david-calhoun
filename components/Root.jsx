import React, {PropTypes} from 'react';
import {RouteHandler} from 'react-router';
import Header from './Header.jsx';
import css from '../app.css';

export default class Root extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Hello</title>
          <link rel="stylesheet" type="text/css" href="/app.css"/>
        </head>
        <body>
          <Header/>
          <RouteHandler/>
          <script src='/bundle.js' />
        </body>
      </html>
    );
  }
}
