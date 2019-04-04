import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import Markdown from 'markdown-to-jsx';
import Footer from '../components/Footer';
import { useScrollToTop } from '../utils/Hooks';
import { AppContext } from '../App';

const Article = (props) => {
  const { title, description, article } = props;
  const { status } = useContext(AppContext);
  useScrollToTop(status);

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <ArticleContainer>
        <ArticleContent>
          <Markdown>{article}</Markdown>
        </ArticleContent>
      </ArticleContainer>
      <Footer />
    </React.Fragment>
  );
};

const ArticleContainer = styled.article`
  max-width: 740px;
  padding: 80px 20px;
  margin: 0 auto;
  color: ${props => props.theme.colorText(0.7)};
  box-sizing: border-box;
  line-height: 1.4;
`;

const ArticleContent = styled.div`
  h1,
  h2,
  h3,
  h4 {
    color: ${props => props.theme.colorText(0.9)};
    font-weight: 400;
    line-height: 1.2;
  }

  h1 {
    font-size: 56px;

    @media (max-width: ${props => props.theme.tablet}) {
      font-size: 36px;
    }
  }

  h2 {
    font-size: 38px;
    margin-top: 64px;
    margin-bottom: 16px;

    @media (max-width: ${props => props.theme.tablet}) {
      font-size: 28px;
    }
  }

  h3 {
    font-size: 26px;
    font-weight: 500;
    margin-top: 50px;
    margin-bottom: 16px;
  }

  a,
  p,
  li {
    font-size: 22px;
    line-height: 1.5;

    @media (max-width: ${props => props.theme.mobile}) {
      font-size: 18px;
    }
  }

  li {
    margin-bottom: 16px;
  }

  ul {
    padding-left: 30px;
  }

  a,
  a:visited {
    color: ${props => props.theme.colorBlueLight()};
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colorBlueLight(0)};
  }

  a:hover {
    text-decoration-color: ${props => props.theme.colorBlueLight(0.4)};
  }
`;

export default Article;
