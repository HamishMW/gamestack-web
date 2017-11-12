import React, { Component } from 'react';
import './Home.css';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Icon from '../utils/Icon';
import HeroVideo from '../images/app-preview.mp4';
import BackgroundLarge from '../images/background-large.png';
import BackgroundLarge2x from '../images/background-large@2x.png';
import BackgroundMedium from '../images/background-medium.png';
import BackgroundMedium2x from '../images/background-medium@2x.png';
import BackgroundSmall from '../images/background-small.png';
import BackgroundSmall2x from '../images/background-small@2x.png';
import HeroVideoFrame from '../images/app-preview-frame.jpg';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  state = {
    isDesktop: false,
  }

  componentDidMount() {
    this.updateDevice();
    window.addEventListener('resize', this.updateDevice);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDevice);
  }

  updateDevice = () => {
    this.setState({ isDesktop: window.innerWidth > 1000 });
  }

  render() {
    const { isDesktop } = this.state;

    return (
      <div className="Home">
        <div className="Container">

          <div className="MainHero">
            <div className="MainHero__details">
              <div className="MainHero__logo">
                <Logo className="MainHero__logo-icon" color="#2979FF"/>
                <h1 className="MainHero__logo-text">Gamestack</h1>
              </div>
              <div className="MainHero__text">
                <h2 className="MainHero__title">Finish your games</h2>
                <p className="MainHero__description">Sync your Steam & Blizzard game libraries. Track your progress, achievements, and time played.</p>
              </div>
              <div className="MainHero__actions">
                <Button icon="apple" text="Request beta invite" style={{marginRight: 10, marginBottom: 20}} shadow onClick={() => window.location='mailto:contact@gamestackapp.com?subject=Gamestack Beta Request'} />
                <Button icon="android" text="Android coming soon" flat disabled />
              </div>
            </div>
            { isDesktop && <Footer className="MainHero__footer" /> }
          </div>

          <div className="PreviewSection">
            <div className="PhoneContainer">
              <div className="PhoneContainer__phone">
                <div className="PhoneContainer__screen">
                  <video className="PhoneContainer__video" autoPlay muted loop playsInline poster={HeroVideoFrame}>
                    <source src={HeroVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="PreviewSection__detail">
              <div className="PreviewSection__detailSection">
                <Icon className="PreviewSection__detailIcon" icon="steam" color="rgba(var(--color-white), 0.8)"/>
                <Icon className="PreviewSection__detailIcon" icon="blizzard" color="rgba(var(--color-white), 0.8)" />
              </div>
              <div className="PreviewSection__detailText">Currently supported</div>
            </div>

            <div className="PreviewSection__background">
              <picture className="PreviewSection__backgroundPicture">
                <source
                  srcSet={`${BackgroundLarge} 1x, ${BackgroundLarge2x} 2x`}
                  media="(min-width: 1400px)"
                />
                <source
                  srcSet={`${BackgroundMedium} 1x, ${BackgroundMedium2x} 2x`}
                  media="(min-width: 600px)"
                />
                <img
                  className="PreviewSection__backgroundImage"
                  src={BackgroundSmall}
                  srcSet={`${BackgroundSmall} 1x, ${BackgroundSmall2x} 2x`}
                  alt="Gamestack – organize all your games in one place"
                />
              </picture>
              { !isDesktop &&
                <svg className="PreviewSection__angle PreviewSection__angle--top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon points="0 0, 100 0, 100 100"/>
                </svg>
              }
              <svg className="PreviewSection__angle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0 0, 0 100, 100 100"/>
              </svg>
            </div>
          </div>
          { !isDesktop && <Footer /> }
        </div>
      </div>
    )
  }
}
