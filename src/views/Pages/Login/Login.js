import React, {Component} from "react";
import {Container, Row, Col, CardGroup,
        Card, CardBlock, Button, Input,
        InputGroup, InputGroupAddon} from "reactstrap";

// authentication
import Auth from '../../../Auth/Auth';

const auth = new Auth();

class Login extends Component {

  login() {
      auth.login();
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
                          Login
                        </Button>
                      </Col>
                      <Col xs="6">
                        <Button color="primary" className="px-4">Message</Button>
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
