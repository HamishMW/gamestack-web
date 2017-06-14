import React, { Component } from 'react';
import Home from './screens/Home';
import Auth from './screens/Auth';
import Terms from './articles/Terms';
import Privacy from './articles/Privacy';
import {Helmet} from "react-helmet";
import TagManager from './utils/TagManager';

import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

const App = () => (
  <div className="App">
    <TagManager gtmId='GTM-TCWSWLM' />
    <Router>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/terms' component={Terms}/>
        <Route path='/privacy' component={Privacy}/>
      </div>
    </Router>
  </div>
)

export default App;
