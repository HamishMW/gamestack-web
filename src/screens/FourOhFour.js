import React from 'react';
import { Helmet } from 'react-helmet';
import './FourOhFour.css';

function FourOhFour() {
  return (
    <div>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="This page doesn't exist"/>
      </Helmet>
      <main className="FourOhFour">
        <h1 className="FourOhFour__title">404</h1>
        <p className="FourOhFour__description">The page could not be fount. It probably doesn't exist, or it may have moved</p>
      </main>
    </div>
  );
}

export default FourOhFour;
