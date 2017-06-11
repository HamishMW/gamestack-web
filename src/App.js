import React, { Component } from 'react';
import Home from './screens/Home';
import Auth from './screens/Auth';
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/auth" component={Auth}/>
    </div>
  </Router>
)

export default App;
