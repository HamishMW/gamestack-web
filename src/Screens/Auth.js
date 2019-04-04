import React from 'react';
import styled from 'styled-components/macro';
import Loader from '../components/Loader';
import { Helmet } from 'react-helmet-async';

const Auth = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Gamestack | Waiting</title>
        <meta name="description" content="waiting" />
      </Helmet>
      <AuthWrapper>
        <Loader />
      </AuthWrapper>
    </React.Fragment>
  );
};

const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default Auth;
