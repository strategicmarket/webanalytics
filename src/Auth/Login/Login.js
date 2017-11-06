

/////////////////////////////////////////////////////
///////        splash page for login          ///////
//////   routes to secure or open access      //////
//////////////////////////////////////////////////


import React, {Component} from "react";
import {Container, Row, Col, CardGroup,
        Card, CardBlock, Button, Input,
        InputGroup, InputGroupAddon} from "reactstrap";
import Register from "./Register";
// authentication
import Auth from '../Auth';

const auth = new Auth();


const handleAuthentication = (nextState, replace) => {
  console.log("DETECTED HASH - HANDLING AUTH")
  console.log(nextState)
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggingIn: false
    };
  }

  login() {
      auth.login();
    }

  componentWillMount(){

      console.log("LOGIN TESTS")
      console.log(this.props)

      if (this.props.location.hash) {
        console.log("LOGIN DETECTED HASH")
        this.props.cb(this.props);
        this.setState({isLoggingIn: true})
        }
      else {
        this.setState({isLoggingIn: false})
        }
    }


render() {
    return (
      <Register status={this.state }/>
    )
  }

}

export default Login;
