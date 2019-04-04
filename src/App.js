import React, { createContext, lazy, Suspense, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle, css } from 'styled-components/macro';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Theme from './utils/Theme';

const Home = lazy(() => import('./screens/Home'));
const Auth = lazy(() => import('./screens/Auth'));
const FourOhFour = lazy(() => import('./screens/FourOhFour'));
const Support = lazy(() => import('./screens/Support'));
const Terms = lazy(() => import('./screens/Terms'));
const Privacy = lazy(() => import('./screens/Privacy'));

export const AppContext = createContext();

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider theme={Theme}>
        <React.Fragment>
          <Helmet>
            <title>Gamestack | Track your games</title>
            <meta
              name="description"
              content="Gamestack is a todo list app for your game collection. Sync your Steam and Blizzard game libraries, track your progress, finish your games."
            />
          </Helmet>
          <GlobalStyles />
          <Router>
            <Route render={({ location }) => (
              <React.Fragment>
                <Transition
                  mountOnEnter
                  unmountOnExit
                  in={location.pathname !== '/' && location.pathname !== '/auth'}
                  timeout={{enter: 0, exit: 400}}
                >
                  {status => <Header status={status} />}
                </Transition>
                <TransitionGroup component={React.Fragment}>
                  <Transition key={location.pathname} timeout={300}>
                    {status => (
                      <MainContent status={status} id="MainContent" role="main">
                        <Helmet>
                          <link rel="canonical" href={`https://gamestackapp.com${location.pathname}`} />
                        </Helmet>
                        <AppContext.Provider value={{ status }}>
                          <Suspense fallback={<React.Fragment />}>
                            <Switch location={location}>
                              <Route exact path="/" component={Home} />
                              <Route path="/support" component={Support} />
                              <Route path="/auth" component={Auth} />
                              <Route path="/functions" component={Auth} />
                              <Route path="/terms" component={Terms} />
                              <Route path="/privacy" component={Privacy} />
                              <Route component={FourOhFour} />
                            </Switch>
                          </Suspense>
                        </AppContext.Provider>
                      </MainContent>
                    )}
                  </Transition>
                </TransitionGroup>
              </React.Fragment>
            )} />
          </Router>
        </React.Fragment>
      </ThemeProvider>
    </HelmetProvider>
  );
};

const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: ${props => props.theme.colorBackground(1)}
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fontStack};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: "liga" on;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background: ${props => props.theme.colorBlue(0.5)};
  }
`;

const MainContent = styled.main`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  transition: opacity 0.3s ease;
  opacity: 0;

  ${props => props.status === 'exiting' && css`
    position: absolute;
    opacity: 0;
  `}

  ${props => props.status === 'entering' && css`
    position: absolute;
    opacity: 0;
  `}

  ${props => props.status === 'entered' && css`
    transition-duration: 0.5s;
    opacity: 1;
  `}
`;

export default App;
