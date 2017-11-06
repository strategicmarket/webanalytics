

/////////////////////////////////////////////////////
///////        splash page for login          ///////
//////   routes to secure or open access      //////
//////////////////////////////////////////////////


import React, {Component} from "react";
import {Container, Row, Col, CardGroup,
        Card, CardBlock, Button, Input,
        InputGroup, InputGroupAddon} from "reactstrap";

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


  login() {
      auth.login();
    }

  componentWillMount(){

      console.log("LOGIN TESTS")
      console.log(this.props)

      if (auth.isAuthenticated()) {
        console.log("LOGIN DETECTED SIGNED IN ALREADY")
        this.props.history.push('/secure')
        }

      if (this.props.location.hash) {
        console.log("LOGIN DETECTED HASH")
        this.props.cb(this.props);
        this.props.history.replace('/secure')
        }
    }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup className="mb-0">
                <Card className="p-4">
                  <CardBlock className="card-body">
                    <h1>Welcome</h1>
                    <p className="text-muted">To the Conversational Economy</p>
                    <Row>
                      <Col xs="6">
                        <Button
                          color="primary"
                          className="px-4"
                          onClick={this.login.bind(this)}
                          >
                          Members
                        </Button>
                      </Col>
                      <Col xs="6">
                        <Button color="primary" className="px-4"
                          >
                          Guests
                        </Button>
                      </Col>
                    </Row>
                  </CardBlock>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBlock className="card-body text-center">
                    <div>
                      <h2>Business Interactions</h2>
                      <p> Develop. Govern. Operate</p>
                      <p> Sales. Products. Orders. Fulfillment. Shipments. </p>

                    </div>
                  </CardBlock>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
