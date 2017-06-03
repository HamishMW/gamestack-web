import React, { Component } from 'react';
import Logo from './Logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-details">
          <Logo color="#2979FF"/>
          <div className="App-header">
            <h1 className="App-title">Gamestack</h1>
            <div className="App-beta-tag">Beta</div>
          </div>
          <p className="App-subheading">coming soon</p>
        </div>
      </div>
    );
  }
}

export default App;
