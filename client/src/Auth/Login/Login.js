
/////////////////////////////////////////////////////
///////        HOC for Login                  ///////
//////   routes to Login Shield or Spinner    //////
//////////////////////////////////////////////////

import React, {Component} from "react";
import {Container, Row, Col, CardGroup,
        Card, CardBlock, Button, Input,
        InputGroup, InputGroupAddon} from "reactstrap";
import Register from "./Register";
// authentication
import Auth from '../Auth';

const auth = new Auth();

// note the workflow for logging in with auth0 is multistep
// isLoggingIn default is false and
// in the first tick the login shield is presented
//  second tick the component lifecycle notes the hash in the url and sets isLoggingIn to true
// and the spinner is presented
// auth0 callback is directed to the root '/' -- and authRoutes detects auth and routes to Full component

const handleAuthentication = (nextState, replace) => {
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

      if (this.props.location.hash) {
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
