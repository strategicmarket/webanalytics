import React, { Component } from 'react';
import { Navbar, Button, Nav } from 'reactstrap';
import './App.css';
import Auth from '../../Auth';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  componentWillMount(){

        console.log("TESTING APP ON ENTRY")
        console.log(this.props)

        if (this.props.location.hash) {
          handleAuthentication(this.props);
          this.props.history.push('/secure')
        }
  }

  render() {
    const { isAuthenticated, userHasScopes } = this.props.auth;

    return (
      <div>
        <Navbar color="faded" light >
          <Nav className="d-md-down-none" navbar>
            <Button
              color="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    color="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    color="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    color="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'ping')}
                  >
                    Ping
                  </Button>
                )
            }
            {
              isAuthenticated() &&  userHasScopes(['write:messages']) && (
                  <Button
                    color="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'admin')}
                  >
                    Admin
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    color="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;
