import React, { Component } from 'react';
import './Auth.css';
import Loader from '../components/Loader';

class Auth extends Component {
  render() {
    return (
      <div className="Auth">
        <Loader/>
      </div>
    );
  }
}

export default Auth;
