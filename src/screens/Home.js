import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from '../components/Footer';
import Container from '../components/Container';
import MainHero from '../components/MainHero';
import PhoneContainer from '../components/PhoneContainer';
import Icon from '../utils/Icon';
import { Media } from '../utils/StyleUtils';
import HeroVideo from '../images/app-preview.mp4';
import HeroVideoFrame from '../images/app-preview-frame.jpg';
import BackgroundLargeBlur from '../images/background-large-blur.png';
import BackgroundLarge from '../images/background-large.png';
import BackgroundLarge2x from '../images/background-large@2x.png';
import BackgroundMediumBlur from '../images/background-medium-blur.png';
import BackgroundMedium from '../images/background-medium.png';
import BackgroundMedium2x from '../images/background-medium@2x.png';
import BackgroundSmallBlur from '../images/background-small-blur.png';
import BackgroundSmall from '../images/background-small.png';
import BackgroundSmall2x from '../images/background-small@2x.png';

const isReactSnap = window.location.port === '45678';

class Home extends Component {
  state = {
    imageLoaded: false,
  };

  componentDidMount() {
    if (this.image.complete) {
      this.setImageLoaded();
    }
  }

  setImageLoaded = () => {
    !isReactSnap && this.setState({imageLoaded: true});
  }

  render() {
    const { imageLoaded } = this.state;
    const imageAlt = 'Gamestack – organize all your games in one place';

    return (
      <HomeContainer>
        <HomeHero
          appName="Gamestack"
          title="Track your games"
          description={
            `Sync your Steam & Blizzard game libraries.
            Track your progress, achievements, and time played.`
          }
        />

        <PreviewSection>
          <HomePhoneContainer video={HeroVideo} frame={HeroVideoFrame} />

          <PreviewSectionDetail>
            <PreviewSectionDetailRow>
              <PreviewSectionDetailIcon icon="steam"/>
              <PreviewSectionDetailIcon icon="blizzard" />
            </PreviewSectionDetailRow>
            <PreviewSectionDetailText>Currently supported</PreviewSectionDetailText>
          </PreviewSectionDetail>

          <PreviewSectionBackground>
            <PreviewSectionPicture>
              <source
                srcSet={`${BackgroundLargeBlur}`}
                media={`(min-width: ${Media.desktop})`}
              />
              <source
                srcSet={`${BackgroundMediumBlur}`}
                media={`(min-width: ${Media.mobile})`}
              />
              <PreviewSectionImage
                blur
                src={BackgroundSmallBlur}
                show={!imageLoaded}
                srcSet={`${BackgroundSmallBlur}`}
                alt={imageAlt}
              />
            </PreviewSectionPicture>
            <PreviewSectionPicture>
              <source
                srcSet={`${BackgroundLarge} 1x, ${BackgroundLarge2x} 2x`}
                media={`(min-width: ${Media.desktop})`}
              />
              <source
                srcSet={`${BackgroundMedium} 1x, ${BackgroundMedium2x} 2x`}
                media={`(min-width: ${Media.mobile})`}
              />
              <PreviewSectionImage
                innerRef={(image) => this.image = image}
                src={BackgroundSmall}
                show={imageLoaded && !isReactSnap}
                onLoad={this.setImageLoaded}
                srcSet={`${BackgroundSmall} 1x, ${BackgroundSmall2x} 2x`}
                alt={imageAlt}
              />
            </PreviewSectionPicture>

            <PreviewSectionAngle top viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0 0, 100 0, 100 100"/>
            </PreviewSectionAngle>

            <PreviewSectionMaskWrapper>
              <PreviewSectionMask />
              <PreviewSectionAngle viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0 0, 0 100, 100 100"/>
              </PreviewSectionAngle>
            </PreviewSectionMaskWrapper>
          </PreviewSectionBackground>
        </PreviewSection>
        <HomeMobileFooter />
      </HomeContainer>
    )
  }
}

const HomeContainer = Container.extend`
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const AnimFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const HomeHero = styled(MainHero)`
  opacity: 0;
  animation-name: ${AnimFade};
  animation-timing-function: ease;
  animation-duration: 0.9s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;

  @media (max-width: ${Media.tablet}) {
    animation: none;
    opacity: 1;
  }
`;

const AnimSlide = keyframes`
  0% {
    transform: translate3d(120px, 0, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const HomePhoneContainer = styled(PhoneContainer)`
  transform: translate3d(120px, 0, 0);
  opacity: 0;
  animation-name: ${AnimSlide};
  animation-timing-function: ${props => props.theme.curveFastoutSlowin};
  animation-duration: 1s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;

  @media (max-width: ${Media.tablet}) {
    animation: none;
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const HomeMobileFooter = styled(Footer)`
  display: none;

  @media (max-width: ${Media.tablet}) {
    display: block;
  }
`;

const PreviewSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: ${Media.tablet}) {
    height: auto;
    padding: 180px 30px 100px;
    overflow: hidden;
  }
`;

const PreviewSectionBackground = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  background-color: ${props => props.theme.colorPrimary(1)};
  width: 100vw;
  right: 0;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.colorPrimary(0.5)};
    z-index: 1;
  }

  @media (max-width: ${Media.tablet}) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
  }
`;

const PreviewSectionPicture = styled.picture`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60vw;
  position: absolute;
  right: 0;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 60px;
    z-index: 1;

    ${props =>
      `background: linear-gradient(90deg,
        ${props.theme.colorPrimary(1)},
        ${props.theme.colorPrimary(0)}
      );`
    }

    @media (max-width: ${Media.tablet}) {
      display: none;
    }
  }

  @media (max-width: ${Media.tablet}) {
    left: 0;
    width: 100vw;
  }
`;

const PreviewSectionImage = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  ${props => props.show && 'opacity: 0.5;'}
  ${props => props.blur && 'filter: blur(10px);'}
  transition: opacity 0.9s ease;
`;

const AnimBackgroundMask = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-60vw, 0, 0);
  }
`;

const PreviewSectionMaskWrapper = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100vw;
  left: 0;
  z-index: 20;
  height: 100%;
  transform: translate3d(0, 0, 0);
  animation-name: ${AnimBackgroundMask};
  animation-duration: 1.4s;
  animation-delay: 0.2s;
  animation-timing-function: ${props => props.theme.curveFastoutSlowin};
  animation-fill-mode: forwards;

  @media (max-width: ${Media.tablet}) {
    left: 0;
    transform: none;
    animation: none;
  }
`;

const PreviewSectionMask = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  right: 0;
  z-index: 20;
  position: absolute;
  background: ${props => props.theme.colorBackground(1)};

  @media (max-width: ${Media.tablet}) {
    display: none;
  }
`;

const PreviewSectionAngle = styled.svg`
  min-height: 100vh;
  height: 100%;
  width: 30vh;
  position: absolute;
  left: 100%;
  z-index: 20;
  fill: ${props => props.theme.colorBackground(1)};

  @media (max-width: ${Media.tablet}) {
    height: 20vw;
    min-height: 0;
    width: 100vw;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  ${props => props.top &&`
    top: 0;
    bottom: auto;
    display: none;

    @media (max-width: ${Media.tablet}) {
      display: block;
    }
  `}
`;

const PreviewSectionDetail = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  margin: 20px 0;
  position: absolute;
  bottom: 0;

  @media (max-width: ${Media.tablet}) {
    position: relative;
    margin-top: 50px;
    flex-direction: column-reverse;
  }
`;

const PreviewSectionDetailRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
`;

const PreviewSectionDetailIcon = styled(Icon)`
  margin-right: 15px;
  fill: ${props => props.theme.colorWhite(0.8)};

  @media (max-width: ${Media.tablet}) {
    margin-right: 0;

    &:first-child {
      margin-right: 20px;
    }
  }
`;

const PreviewSectionDetailText = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colorWhite(0.6)};
  font-weight: 500;

  @media (max-width: ${Media.tablet}) {
    margin-bottom: 20px;
  }
`;

export default Home;
