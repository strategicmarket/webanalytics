import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
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

let isLoggedIn = false

const handleLogout = history  => () => {
    //store.remove('loggedIn');
    console.log("you have been logged out")
    history.push('/login')
  }
const Callback = ({history}) => {
    console.log(history)
    // testing workflow for auth
    if (!isLoggedIn) return <Redirect to = '/login' />


    return <Redirect to = '/secure'/>
}


export default Callback;
