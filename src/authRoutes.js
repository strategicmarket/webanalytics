import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Login from './Auth/Login/Login';
import Page404 from './Auth/404/Page404';
import Full from './Containers/Full/Full';
import Profile from './Auth/Test/Profile/Profile';
import Admin from './Auth/Test/Admin/Admin';
import Guest from './Auth/Test/Guest/Guest';
import Callback from './Auth/Test/Callback/Callback';
import Auth from './Auth/Auth';
import history from './Auth/history';

const auth = new Auth();


const handleAuthentication = (nextState, replace) => {
  console.log("AUTHROUTES EXECUTING AUTHENTICATION")
  console.log(nextState)
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const authRoutes = () => {
  return (
    <Router history={history}>
        <div>
          <Switch>
          <Route path="/guest" render={(props) =>
              <Guest auth={auth} {...props} />
          } />
          <Route path="/admin" render={(props) =>
              <Admin auth={auth} {...props} />
          } />
          <Route path="/" render={(props) => (
            !auth.isAuthenticated() ? (
              <Login auth={auth} cb={handleAuthentication} {...props}/>
            ) : (
              <Full auth={auth} {...props} />
            )
          )} />
        <Route component={Page404} />
        </Switch>
        </div>
      </Router>
  );
}
