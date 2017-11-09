
//////////////////////////////////////////////////////
///////        HOC for Banter Streams          ///////
//////       routes to different views        //////
//////////////////////////////////////////////////

import React, {Component} from "react";
import {Container, Row, Col, CardGroup,
        Card, CardBlock, Button, Input,
        InputGroup, InputGroupAddon} from "reactstrap";
import io from "socket.io-client";
import Views from "./views";

const toggleView = (view) => {
  console.log("Toggle Banter View")
  console.log(view)
}
let socket = null
/*
socket.on('message', payload => {
  console.log('Message from 3001 ', payload.payload)
})
*/
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
      //socket=io()
}

render() {
    return (
      <Views view={this.state }/>
    )
  }

}

export default Banter;
