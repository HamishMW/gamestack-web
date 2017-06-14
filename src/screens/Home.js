import React from 'react';
import './Home.css';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="Home">
    <div className="Container">
      <div className="backgroundHeader"/>
      <div className="MainHero">
        <div className="MainHero__details">
          <div className="MainHero__logo">
            <Logo className="MainHero__logo-icon" color="#2979FF"/>
            <div className="MainHero__logo-text">Gamestack</div>
          </div>
          <div className="MainHero__text">
            <h1 className="MainHero__title">Finish your games.</h1>
            <p className="MainHero__description">Sync your game libraries. Track your progress and achievements.</p>
          </div>
          <div className="MainHero__actions">
            <Button icon="apple" text="Request beta invite" style={{marginRight: 10, marginBottom: 20}} shadow onClick={() => window.location='mailto:contact@gamestackapp.com'} />
            <Button icon="android" text="Android coming soon" flat disabled onClick={() => console.log('heyo')} />
          </div>
        </div>
        <div className="MainHero__image">
          <div className="PhoneContainer">
            <div className="PhoneContainer__phone">
              <div className="PhoneContainer__screen" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="Footer">
      <div className="Footer__item">© Gamestack</div>
      <a className="Footer__link" href="mailto:contact@gamestackapp.com">Contact</a>
      <Link className="Footer__link" to="/terms">Terms of Service</Link>
      <Link className="Footer__link" to="/privacy">Privacy</Link>
    </footer>
  </div>
)

export default Home;
