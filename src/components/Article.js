import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Theme from '../utils/Theme';
import ScrollToTop from '../utils/ScrollToTop';

const Fragment = React.Fragment;

class Article extends Component {
  state = {
    markdown: '',
  }

  componentWillMount() {
    this.fetchMarkdown();
  }

  fetchMarkdown = async () => {
    const { file } = this.props;
    const data = await fetch(file);
    const text = await data.text();
    this.setState({markdown: text});
  }

  render() {
    const { title, description } = this.props;
    const { markdown } = this.state;

    return (
      <Fragment>
        <ScrollToTop />
        <Helmet>
          <title>{title}</title>
          { description && <meta name="description" content={description}/>}
        </Helmet>
        <ArticleContainer className="Markdown">
          <ArticleHeader>
            <Logo color={Theme.colorPrimary(1)} />
          </ArticleHeader>
          <ReactMarkdown source={markdown} />
        </ArticleContainer>
        <Footer />
      </Fragment>
    )
  }
};

const ArticleContainer = styled.article`
  max-width: 800px;
  padding: 80px 20px;
  margin: 0 auto;
  color: ${props => props.theme.colorText(0.7)};
  box-sizing: border-box;
  line-height: 1.4;
`;

const ArticleHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 80px;
`;

export default Article;
