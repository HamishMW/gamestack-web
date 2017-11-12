import React from 'react';
import ReactMarkdown from 'react-markdown';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import './Article.css';

const Article = (props) => (
  <div>
    <article className="Article">
      <Helmet>
        <title>{props.title}</title>
        <meta name="description" content={props.description}/>
      </Helmet>
      <header className="Article__header">
        <Logo class="Article__logo" color="#2979FF"/>
      </header>
      <ReactMarkdown source={props.source} />
    </article>
    <Footer />
  </div>
)

export default Article;
