import React, { Component } from 'react';
import loading from './loading.svg';

class Secure extends Component {

  render() {
    const style = {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    }
    return (
      <div style={style}>
        <h2>Work in Progress</h2>
      </div>
    );
  }
}

export default Secure;
