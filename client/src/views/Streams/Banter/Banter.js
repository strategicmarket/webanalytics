
//////////////////////////////////////////////////////
///////        HOC for Banter Streams          ///////
//////       routes to different views        //////
//////////////////////////////////////////////////

import React, {Component}               from "react";
import {Container, Row, Col, CardGroup,
        Card, CardBlock, Button, Input,
        InputGroup, InputGroupAddon}    from "reactstrap";
import * as API                         from '../../../utils/API'
import io                               from "socket.io-client";
import Views                            from "./views";

const toggleView = (view) => {
  console.log("Toggle Banter View")
  console.log(view)
}
let socket = io.connect(API.api)
console.log(">>>>>>>>>>>>>DEBUG<<<<<<<<<<<<")
console.log(API.api)

const stream = () => {
  socket.on('message', data => {
    console.log('Message from server ' + API.api + "" + data.payload)
  })

}

class Banter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      view: "stream"
    };
  }

  componentWillMount(){

      console.log("Banter Tests")
      console.log(this.props)
      console.log(this.state)
      stream()

}

render() {
    return (
      <Views view={this.state }/>
    )
  }

}

export default Banter;
