import React, { Component } from 'react';
import './Auth.css';
import Loader from '../components/Loader';

class Auth extends Component {
  render() {
    return (
      <main className="Auth">
        <Loader/>
      </main>
    );
  }
}

export default Auth;
