import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBlock} from "reactstrap";

import 'spinkit/css/spinkit.css';

class Callback extends Component {

  render() {
    return (
      <div className="animated">

        <Row>
          <Col lg="4">
            <Card>
              <CardHeader>
                <i className="fa fa-spinner"></i> Authenticating
              </CardHeader>
              <CardBlock className="card-body">
                <div className="sk-rotating-plane"></div>
              </CardBlock>
            </Card>
          </Col>

        </Row>
      </div>
    )
  }
}

export default Callback;
