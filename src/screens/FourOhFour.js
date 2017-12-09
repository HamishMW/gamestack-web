import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Fragment = React.Fragment;

const FourOhFour = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="This page doesn't exist"/>
      </Helmet>
      <FourOhFourWrapper>
        <FourOhFourTitle>404</FourOhFourTitle>
        <FourOhFourDescription>
          The page could not be fount. It probably doesn't exist, or it may have moved
        </FourOhFourDescription>
      </FourOhFourWrapper>
    </Fragment>
  );
}

const FourOhFourWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const FourOhFourTitle = styled.h1`
  font-size: 64px;
  color: white;
  margin: 0;
  margin-bottom: 16px;
`;

const FourOhFourDescription = styled.p`
  font-size: 18px;
  color: white;
  margin: 0;
  max-width: 500px;
  padding: 0 10px;
  text-align: center;
  line-height: 1.6;
`;

export default FourOhFour;
