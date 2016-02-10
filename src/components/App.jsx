import React from 'react';
import Header from './Header';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header {...this.props}/>
        {React.cloneElement(this.props.children, {props: this.props})}
      </div>
    );
  }
}
