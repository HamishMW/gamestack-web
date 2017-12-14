import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Theme from '../utils/Theme';
import { Media } from '../utils/StyleUtils';
import ScrollToTop from '../utils/ScrollToTop';


const Fragment = React.Fragment;

const Article = (props) => {
  const { title, description, article } = props;

  return (
    <Fragment>
      <ScrollToTop />
      <Helmet>
        <title>{title}</title>
        { description && <meta name="description" content={description}/>}
      </Helmet>
      <ArticleContainer>
        <ArticleHeader>
          <Link to="/"><Logo color={Theme.colorPrimary(1)} /></Link>
        </ArticleHeader>
        <ArticleContent>
          <ReactMarkdown source={article} />
        </ArticleContent>
      </ArticleContainer>
      <Footer />
    </Fragment>
  )
};

const ArticleContainer = styled.article`
  max-width: 800px;
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
  }

  h1 {
    font-size: 42px;
  }

  @media (max-width: ${Media.tablet}) {
    h1 {
      font-size: 32px;
    }
  }

  h2 {
    font-size: 24px;
    margin-top: 50px;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  a,
  a:visited {
    color: ${props => props.theme.colorPrimary(1)};
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  a:hover {
    background: ${props => props.theme.colorPrimary(0.2)};
  }
`;

const ArticleHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 80px;
`;

export default Article;
