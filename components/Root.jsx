var React        = require('react');
var Router       = require('react-router');
var RouteHandler = Router.RouteHandler;
var Header       = require('./Header.jsx');

var Root = React.createClass({
  render: function () {
    var initProps = {
      __html: safeStringify(this.props)
    };

    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <Header />
          <RouteHandler {...this.props}/>
          <script
            id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={initProps} />
          <script src='bundle.js' />
        </body>
      </html>
    );
  }
});

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
}

module.exports = Root;
