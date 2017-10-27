

import React, {Component}                       from "react";
import {Container, Row, Col, CardGroup, Card,
        CardBlock, Button, Input, InputGroup,
        InputGroupAddon}                        from "reactstrap";
import * as API                                 from '../utils/ContactsAPI'


class Login extends Component {
  constructor(props){
    super(props);
      this.state={
        username:'',
        password:''
      }
    }
    handleClick(event){
        var apiBaseUrl = "http://localhost:4000/api/";
        var self = this;
        var payload={
          "email":this.state.username,
          "password":this.state.password
        }
        api.post('login', payload)
          .then(function (response) {
            console.log(response);
            /*
            if(response.data.code == 200){
              console.log("Login successfull");
              var uploadScreen=[];
              uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
              self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
            }
            else if(response.data.code == 204){
              console.log("Username password do not match");
              alert("username password do not match")
            }
            else{
              console.log("Username does not exists");
              alert("Username does not exist");
            }
          */
          })
          .catch(function (error) {
            console.log(error);
          });
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
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Username"
                        onChange = {(event,newValue) => this.setState({username:newValue})}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        onChange = {(event,newValue) => this.setState({password:newValue})}/>
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button
                          color="primary"
                          className="px-4"
                          onClick={(event) => this.handleClick(event)}>Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col>
                    </Row>
                  </CardBlock>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBlock className="card-body text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" active>Register Now!</Button>
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
