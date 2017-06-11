import React from 'react';
import './Home.css';
import Logo from '../components/Logo';

const Home = () => (
  <div className="Home">
    <div className="Home__details">
      <Logo className="Home__logo" color="#2979FF"/>
      <div className="Home__header">
        <h1 className="Home__title">Gamestack</h1>
        <div className="Home__beta-tag">Beta</div>
      </div>
      <p className="Home__subheading">coming soon</p>
    </div>
  </div>
)

export default Home;
