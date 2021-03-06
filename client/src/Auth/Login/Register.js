import React from "react";
import {Container, Row, Col, CardGroup, CardTitle, CardText,
        Card, CardBlock, CardHeader, Button, Input,
        InputGroup, InputGroupAddon} from "reactstrap";
import Auth from '../Auth';
import 'spinkit/css/spinkit.css';

const auth = new Auth();
const login = () => {
  auth.login();
}

const Shield = (props) => {
  return <div className="app flex-row align-items-center">
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
                      onClick={auth.login}
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
}

const Spinner = (props) => {
  return <div className="app flex-row align-items-center">
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
            <Card inverse color="primary" >
              <div className="sk-rotating-plane"></div>
            </Card>
        </Col>
      </Row>
    </Container>
  </div>
}


const Register = (props) => {
     const isLoggingIn = props.status.isLoggingIn;
     if (!isLoggingIn) {
        return <Shield />;
     }
        return <Spinner />;
}

export default Register;
