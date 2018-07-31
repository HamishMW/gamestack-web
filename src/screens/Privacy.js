/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import Article from '../components/Article';
import Header from '../components/Header';
import PrivacyMarkdown from '!raw-loader!../articles/privacy.md';

const Terms = () => (
  <React.Fragment>
    <Header />
    <Article
      title="Gamestack Privacy Policy"
      article={PrivacyMarkdown}
    />
  </React.Fragment>
);

export default Terms;