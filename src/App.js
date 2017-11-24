import React from 'react';
import Home from './screens/Home';
import Auth from './screens/Auth';
import Support from './screens/Support';
import Terms from './articles/Terms';
import Privacy from './articles/Privacy';
import { Helmet } from 'react-helmet';
import TagManager from './utils/TagManager';
import './variables.css';

import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

const App = () => (
  <div className="App">
    <Helmet>
      <title>Gamestack | Track your games</title>
      <meta name="description" content='Gamestack is a todo list for your game collection. Sync your Steam and Blizzard game libraries, track your progress, finish your games.'/>
    </Helmet>
    <TagManager gtmId='GTM-TCWSWLM' />
    <Router>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/support' component={Support}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/functions' component={Auth}/>
        <Route path='/terms' component={Terms}/>
        <Route path='/privacy' component={Privacy}/>
      </div>
    </Router>
  </div>
)

export default App;
