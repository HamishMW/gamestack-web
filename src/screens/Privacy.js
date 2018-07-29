/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import Article from '../components/Article';
import PrivacyMarkdown from '!raw-loader!../articles/privacy.md';

const Terms = () => (
  <Article 
    title="Gamestack Privacy Policy"
    article={PrivacyMarkdown}
  />
);

export default Terms;