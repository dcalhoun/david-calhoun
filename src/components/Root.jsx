import React from 'react';
import styles from '../app.css';

export default class Root extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" type="text/css" href="./bundle.css" media="screen" />
        </head>
        <body className="p2">
          <div id="js-outlet">
            {React.cloneElement(this.props.children, this.props)}
          </div>
          {Object.keys(this.props.assets).map((chunk, index) => {
            return <script key={index} src={this.props.assets[chunk]}/>;
          })}
        </body>
      </html>
    );
  }
}
