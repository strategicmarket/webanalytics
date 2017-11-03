import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/'
import history from './Auth/history'

// Views
import Login from './views/Pages/Login/'
import LoginBK from './views/Pages/LoginBK/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'

// auth flow
import Auth from './Auth/Auth';
import Callback from './Auth/Callback/Callback';
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  console.log("ENTERED HANDLE AUTHENTICATION")
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}


ReactDOM.render((
    <Router history={history} >
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/404" name="Page 404" component={Page404}/>
      <Route exact path="/500" name="Page 500" component={Page500}/>
      <Route exact path="/callback" render={(props)=> (
          <Redirect to="/"/>
        )}/>
      <Route path="/login" name="Login" component={Login}/>
      <Route path="/" name="Home" component={Callback}/>

    </Switch>
  </Router>
), document.getElementById('root'));
