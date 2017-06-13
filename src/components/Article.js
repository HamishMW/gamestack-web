import React from 'react';
import ReactMarkdown from 'react-markdown';
import Logo from '../components/Logo';
import './Article.css';

const Article = (props) => (
  <article className="Article">
    <div className="Article__header">
      <Logo class="Article__logo" color="#2979FF"/>
    </div>
    <ReactMarkdown source={props.source} />
  </article>
)

export default Article;
