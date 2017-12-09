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
              content={'Gamestack is a todo list for your game collection. Sync your Steam and Blizzard game libraries, track your progress, finish your games.'}
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
`;

export default App;
