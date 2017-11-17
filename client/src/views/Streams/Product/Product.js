
//////////////////////////////////////////////////////
///////        HOC for Product Streams         ///////
//////       routes to different views        //////
//////////////////////////////////////////////////

import React, {Component}               from "react";
import {Container, Row, Col, CardGroup,
        Card, CardBlock, Button, Input,
        InputGroup, InputGroupAddon}    from "reactstrap";
import * as API                         from '../../../utils/API'
import io                               from "socket.io-client";
import ViewProduct                      from "./ViewProduct";


let endpoint = API.api

class Banter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: false,
      feed: []
    };
  }
 componentDidMount(){
   const socket = io.connect(endpoint)
   socket.on("product", data => {
     let feed = this.state.feed
     feed.push(data)
     if (feed.length > 9 ) {
       feed.splice(0, 1)
       this.setState({message: data, feed: feed})
      }
      else {
       this.setState({message: data, feed: feed})
    }
  })
 }

render() {
   const { message, feed } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
      {message
          ? <ViewProduct data={message} feed={feed} />
          : <p>Loading...</p>}
      </div>
    )
  }

}

export default Banter;
