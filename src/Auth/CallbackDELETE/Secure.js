

/////////////////////////////////////////////////////
///////        routing based on auth         ///////
//////    note the public path '/' set in    //////
//////  webpack config. This set access to   //////
/////  menu options based on permissions     //////
//////////////////////////////////////////////////

// index/secure routes the <Full />  in containers - all apps
// other index/ routes with limited micro app access will be added

import React, { Component } from 'react';
import {
  Badge,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
  DropdownToggle
} from 'reactstrap'



class Secure extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: false,
    };
    console.log("PROPS RECEIVED")
    console.log(props)

    this.handleClick = this.handleClick.bind(this);
    this.props = props

  }
  handleClick() {
    this.setState({ username: 'pat', password: 'secret'});
    console.log("BUTTON CLICKED")
    console.log(this.state)
    console.log(this.props)
    this.props.history.push('/secure')
  }

  render() {

    return (
      <header className="app-header navbar">

        <Nav className="d-md-down-none" navbar>
          <Button
            color="primary"
            className="btn-margin"
            onClick={this.handleClick}

          >
            Click me
          </Button>

        </Nav>
      </header>
    );
  }
}

export default Secure;
