import React, { Component } from 'react';
import config               from '../../../../config/config'

// refactor this -- need to handle this inside of url of css --
// but having trouble with webpack loading 'url' in correct relative
var image1 = config.origin + "/spinner.png"

class Callback extends Component {

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
      backgroundImage: `url(${image1})`
    }
    return (
      <div style={style}>
        <h3>Authenticating</h3>
      </div>
    );
  }
}

export default Callback;
