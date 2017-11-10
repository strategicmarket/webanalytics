
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
import ViewBanter                       from "./ViewBanter";

const toggleView = (view) => {
  console.log("Toggle Banter View")
  console.log(view)
}
//let socket = io.connect(API.api)

const stream = () => {
  socket.on('message', data => {
    console.log(data)
    console.log('Message from server ' + API.api + " " + data.username)
  })

}

class Banter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      response: false,
      endpoint: API.api
    };
  }
 componentDidMount(){
   const { endpoint } = this.state;
   const socket = io.connect(endpoint)
   socket.on("message", data => this.setState({response: data}))
 }

render() {
   const { response } = this.state;
   let username = response.username
   let content = response.content
   let date = response.date

    return (
      <div style={{ textAlign: "center" }}>
      {response
          ? <ViewBanter data={response} />
          : <p>Loading...</p>}
      </div>
    )
  }

}

export default Banter;
