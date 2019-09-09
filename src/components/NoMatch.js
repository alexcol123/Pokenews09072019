import React, { Component } from 'react';

export class NoMatch extends Component {


  render() {

    console.log(this.props)
    setTimeout(() => {
      this.props.history.push('/home');
    }, 7000);

    return (
      <div className="center">
        <h1>404 Page Not Found</h1>
        <h4>You will be reditected to the Home Page in 7 Seconds</h4>
      </div>
    );
  }
}

export default NoMatch;
