import React from 'react';
import Home from './screens/Home';
import Auth from './screens/Auth';
import Support from './screens/Support';
import Terms from './articles/Terms';
import Privacy from './articles/Privacy';
import {Helmet} from 'react-helmet';
import TagManager from './utils/TagManager';
import AppleTouchIcon from './images/apple-icon.png';
import SocialBanner from './images/home-background.jpg';

import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';

const App = () => (
  <div className="App">
    <Helmet>
      <link rel="apple-touch-icon" href={AppleTouchIcon}/>
      <title>Gamestack | Track your games</title>
      <meta name="description" content='Sync your game libraries and track your progress'/>

    	<meta property="og:image" content={`https://gamestackapp.com${SocialBanner}`}/>
    	<meta property="og:image:type" content='image/png'/>
    	<meta property="og:image:width" content='1200'/>
    	<meta property="og:image:height" content='549'/>

    	<meta property="og:title" content='Gamestack – track your games'/>
    	<meta property="og:site_name" content='Gamestack'/>
    	<meta property="og:url" content='https://gamestackapp.com'/>
    	<meta property="og:description" content='Sync your game libraries and track your progress'/>

    	<meta name="twitter:card" content="summary" />
    	<meta name="twitter:description" content='Gamestack helps you organize and track your video game progress'/>
    	<meta name="twitter:title" content='Gamestack' />
    	<meta name="twitter:site" content='@gamestackapp' />
    	<meta name="twitter:image" content={`https://gamestackapp.com${SocialBanner}`} />
    </Helmet>
    <TagManager gtmId='GTM-TCWSWLM' />
    <Router>
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/support' component={Support}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/terms' component={Terms}/>
        <Route path='/privacy' component={Privacy}/>
      </div>
    </Router>
  </div>
)

export default App;
