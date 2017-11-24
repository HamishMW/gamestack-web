import React, { Component } from 'react';
import './Auth.css';
import Loader from '../components/Loader';
import { Helmet } from 'react-helmet';

class Auth extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>'Waiting'</title>
          <meta name="description" content='...waiting'/>
        </Helmet>
        <main className="Auth">
          <Loader/>
        </main>
      </div>
    );
  }
}

export default Auth;
