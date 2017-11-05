import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './Auth/Test/App/App';
import Home from './Auth/Test/Home/Home';
import Profile from './Auth/Test/Profile/Profile';
import Ping from './Auth/Test/Ping/Ping';
import Admin from './Auth/Test/Admin/Admin';
import Callback from './Auth/Test/Callback/Callback';
import Auth from './Auth/Auth';
import history from './Auth/history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const authRoutes = () => {
  return (
    <Router history={history} component={App}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
          <Route path="/ping" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Ping auth={auth} {...props} />
            )
          )} />
          <Route path="/admin" render={(props) => (
            !auth.isAuthenticated() || !auth.userHasScopes(['write:messages']) ? (
              <Redirect to="/home"/>
            ) : (
              <Admin auth={auth} {...props} />
            )
          )} />
          <Route path="/secure" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
  );
}
