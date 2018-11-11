import React, { Component } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import asyncComponent from './components/AsyncComponent';
import Header from './components/Header';
import Theme from './utils/Theme';

const Home = asyncComponent(props => import('./screens/Home'));
const Auth = asyncComponent(props => import('./screens/Auth'));
const FourOhFour = asyncComponent(props => import('./screens/FourOhFour'));
const Support = asyncComponent(props => import('./screens/Support'));
const Terms = asyncComponent(props => import('./screens/Terms'));
const Privacy = asyncComponent(props => import('./screens/Privacy'));

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
              content={'Gamestack is a todo list app for your game collection. Sync your Steam and Blizzard game libraries, track your progress, finish your games.'}
            />
          </Helmet>
          <GlobalStyles />
          <Router>
            <Route render={(routeProps) => (
              <React.Fragment>
                {routeProps.location.pathname !== '/' && routeProps.location.pathname !== '/auth' && <Header />}
                <Switch>
                  <Route exact path="/" render={props => <Home {...props} />} />
                  <Route path="/support" render={props => <Support {...props} />} />
                  <Route path="/auth" render={props => <Auth {...props} />} />
                  <Route path="/functions" render={props => <Auth {...props} />} />
                  <Route path="/terms" render={props => <Terms {...props} />} />
                  <Route path="/privacy" render={props => <Privacy {...props} />} />
                  <Route render={props => <FourOhFour {...props} />} />
                </Switch>
              </React.Fragment>
            )} />
          </Router>
        </Fragment>
      </ThemeProvider>
    );
  }
};

const GlobalStyles = createGlobalStyle`
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
    background: ${Theme.colorBlue(0.5)};
  }
`;

export default App;
