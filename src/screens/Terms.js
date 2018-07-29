/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import Article from '../components/Article';
import TermsMarkdown from '!raw-loader!../articles/terms.md';

const Terms = () => (
  <Article 
    title="Gamestack Terms of Service"
    article={TermsMarkdown}
  />
);

export default Terms;