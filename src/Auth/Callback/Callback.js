import React, { Component } from 'react';
import loading from './loading.svg';
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
} from 'reactstrap';


class Callback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }


  logout() {
    //store.remove('loggedIn');
    this.props.history.push('/login');
  }

  render() {

    return (
      <div>
        <h3>please be patient</h3>
          <Button
            color="primary"
            className="btn-margin"
            onClick={this.logout.bind(this)}
          >
            Logout
          </Button>
      </div>
    );
  }
}

export default Callback;
