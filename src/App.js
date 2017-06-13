import React, { Component } from 'react';
import Home from './screens/Home';
import Auth from './screens/Auth';
import Terms from './articles/Terms';
import Privacy from './articles/Privacy';
import ReactGA from 'react-ga';

import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

ReactGA.initialize('UA-100980130-1');

function fireTracking() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = () => (
  <Router onUpdate={fireTracking}>
    <div>
      <Route exact path='/' component={Home}/>
      <Route path='/auth' component={Auth}/>
      <Route path='/terms' component={Terms}/>
      <Route path='/privacy' component={Privacy}/>
    </div>
  </Router>
)

export default App;
