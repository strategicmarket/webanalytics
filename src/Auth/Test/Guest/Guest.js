import React, { Component } from 'react';

class Guest extends Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                You are logged in and have full platform access!
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! For full platform access please{' '}
                <a style={{cursor:'pointer'}}
                  onClick={login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Guest;
