import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Home from './screens/Home';
import Auth from './screens/Auth';
import FourOhFour from './screens/FourOhFour';
import Support from './screens/Support';
import { Helmet } from 'react-helmet';
import TagManager from './utils/TagManager';
import Theme from './utils/Theme';
import { Media } from './utils/StyleUtils';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Article from './components/Article';
import terms from './articles/terms.md';
import privacy from './articles/privacy.md';

const Fragment = React.Fragment;

class App extends Component {

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Fragment>
          <Helmet>
            <title>Gamestack | Track your games</title>
            <meta
              name="description"
              content={
                `Gamestack is a todo list for your game collection. Sync your Steam
                and Blizzard game libraries, track your progress, finish your games.`
              }
            />
          </Helmet>
          <TagManager gtmId="GTM-TCWSWLM" />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/support" component={Support} />
              <Route path="/auth" component={Auth} />
              <Route path="/functions" component={Auth} />
              <Route path="/terms" render={() => (
                <Article
                  title="Gamestack Terms of Service"
                  file={terms}
                />
              )}/>
              <Route path="/privacy" component={() => (
                <Article
                  title="Gamestack Privacy Policy"
                  file={privacy}
                />
              )}/>
              <Route component={FourOhFour} />
            </Switch>
          </Router>
        </Fragment>
      </ThemeProvider>
    );
  }
};

injectGlobal`
  html,
  body {
    background-color: ${Theme.colorBackground(1)}
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${Theme.fontStack};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background: ${Theme.colorPrimary(0.4)};
  }

  .Markdown h1,
  .Markdown h2,
  .Markdown h3,
  .Markdown h4 {
    color: ${Theme.colorText(0.9)};
    font-weight: 400;
  }

  .Markdown h1 {
    font-size: 42px;
  }

  @media (max-width: ${Media.tablet}) {
    .Markdown h1 {
      font-size: 32px;
    }
  }

  .Markdown h2 {
    font-size: 24px;
    margin-top: 50px;
  }

  .Markdown h3 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  .Markdown a,
  .Markdown a:visited {
    color: ${Theme.colorPrimary(1)};
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .Markdown a:hover {
    background:  ${Theme.colorPrimary(0.2)};
  }
`;

export default App;
