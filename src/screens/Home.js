import React from 'react';
import './Home.css';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Icon from '../utils/Icon';
import SteamCardImg from '../images/steam-card.jpg';
import BlizzardCardImg from '../images/blizzard-card.jpg';
import ConsoleCardImg from '../images/console-card.jpg';
import HeroVideo from '../images/app-preview.mp4';
import HeroVideoFrame from '../images/app-preview-frame.jpg';
import { Link } from 'react-router-dom';

const ImageCard = (props) => {
  const { logo, description, image, logoColor, shadow, noImage } = props;
  const shadowCn = shadow ? 'ImageCard--shadow' : '';
  const noImageCn = noImage ? 'ImageCard--noImage' : '';

  return (
    <div className={`ImageCard ${shadowCn} ${noImageCn}`}>
      {image && <img className="ImageCard__image" src={image}/>}
      <div className="ImageCard__content">
        <Icon className="ImageCard__logo" icon={logo} color={logoColor || 'white'} />
        <div className="ImageCard__description">{description}</div>
      </div>
    </div>
  )
}

const Home = () => (
  <div className="Home">
    <div className="Container">
      <div className="backgroundHeader"/>
      <div className="MainHero">
        <div className="MainHero__details">
          <div className="MainHero__logo">
            <Logo className="MainHero__logo-icon" color="#2979FF"/>
            <h1 className="MainHero__logo-text">Gamestack</h1>
          </div>
          <div className="MainHero__text">
            <h2 className="MainHero__title">Finish your games</h2>
            <p className="MainHero__description">A todo list and progress tracker to help you organize and play all of your games.</p>
          </div>
          <div className="MainHero__actions">
            <Button icon="apple" text="Request beta invite" style={{marginRight: 10, marginBottom: 20}} shadow onClick={() => window.location='mailto:contact@gamestackapp.com?subject=Gamestack Beta Request'} />
            <Button icon="android" text="Android coming soon" flat disabled />
          </div>
        </div>
        <div className="MainHero__image">
          <div className="PhoneContainer">
            <div className="PhoneContainer__phone">
              <div className="PhoneContainer__screen">
                <video className="PhoneContainer__video" autoPlay muted loop playsInline poster={HeroVideoFrame}>
      						<source src={HeroVideo} type="video/mp4" />
      					</video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Home__text-section">
        <h2 className="Home__text-section-title">Sync your game libraries</h2>
        <p className="Home__text-section-description">Connect your accounts to track your games, playtime, and achievements in one place</p>
      </div>

      <div className="Home__cards">
        <ImageCard
          logo="steam"
          description="Connect your Steam account to automatically sync your games"
          shadow
          image={SteamCardImg}/>
        <ImageCard
          logo="blizzard"
          description="Sync your Blizzard account to track supported Blizzard games"
          shadow
          image={BlizzardCardImg}/>
        <ImageCard
          logo="console"
          description="More coming soon. Stay tuned for updates!"
          shadow
          image={ConsoleCardImg}/>
      </div>
    </div>
    <footer className="Footer">
      <div className="Footer__item">{`© ${new Date().getFullYear()} Hamish Williams`}</div>
      <a className="Footer__link" href="mailto:contact@gamestackapp.com">Contact</a>
      <Link className="Footer__link" to="/terms">Terms of Service</Link>
      <Link className="Footer__link" to="/privacy">Privacy</Link>
      <a className="Footer__link" href="https://twitter.com/gamestackapp">Twitter</a>
    </footer>
  </div>
)

export default Home;
