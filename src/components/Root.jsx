import React from 'react';

export default class Root extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <div id="js-outlet">
            {this.props.children}
          </div>
          {Object.keys(this.props.assets).map((chunk, index) => {
            return <script key={index} src={this.props.assets[chunk]}/>;
          })}
        </body>
      </html>
    );
  }
}
