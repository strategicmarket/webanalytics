import React from "react";
import {Container, Row, Col, CardGroup, CardTitle, CardText,
        Card, CardBlock, CardHeader, Button, Input,
        InputGroup, InputGroupAddon} from "reactstrap";

import 'spinkit/css/spinkit.css';

const toggle = () => {
  console.log("toggled just now")
}

const Feed = (props) => {
  return <div className="app flex-row align-items-center">
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <CardGroup className="mb-0">
            <Card className="p-4">
              <CardBlock className="card-body">
                <h1>Banter Feed</h1>
                <p className="text-muted">The Conversational Economy</p>
                <Row>
                  <Col xs="6">
                    <Button
                      color="primary"
                      className="px-4"
                      onClick={toggle}
                      >
                      Toggle
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
                  <h2>Testing in Process</h2>

                </div>
              </CardBlock>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  </div>
}

const Chart = (props) => {
  return <div className="app flex-row align-items-center">
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
            <Card inverse color="primary" >
            </Card>
        </Col>
      </Row>
    </Container>
  </div>
}


const Views = (props) => {
     const state = props.view;
     if (state.view === 'stream') {
        return <Feed />;
     }
        return <Chart />;
}

export default Views;
