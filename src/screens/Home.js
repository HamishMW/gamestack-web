import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Container from '../components/Container';
import MainHero from '../components/MainHero';
import Icon from '../utils/Icon';
import { Media } from '../utils/StyleUtils';
import HeroVideo from '../images/app-preview.mp4';
import BackgroundLarge from '../images/background-large.png';
import BackgroundLarge2x from '../images/background-large@2x.png';
import BackgroundMedium from '../images/background-medium.png';
import BackgroundMedium2x from '../images/background-medium@2x.png';
import BackgroundSmall from '../images/background-small.png';
import BackgroundSmall2x from '../images/background-small@2x.png';
import HeroVideoFrame from '../images/app-preview-frame.jpg';

const Home = () => (
  <HomeContainer>
    <MainHero
      appName="Gamestack"
      title="Finish your games"
      description={
        `Sync your Steam & Blizzard game libraries.
        Track your progress, achievements, and time played.`
      }
    />

    <PreviewSection>
      <PhoneContainer>
        <PhoneContainerPhone>
          <PhoneContainerScreen>
            <PhoneContainerVideo
              autoPlay
              muted
              loop
              playsInline
              poster={HeroVideoFrame}
            >
              <source src={HeroVideo} type="video/mp4" />
            </PhoneContainerVideo>
          </PhoneContainerScreen>
        </PhoneContainerPhone>
      </PhoneContainer>

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
            srcSet={`${BackgroundLarge} 1x, ${BackgroundLarge2x} 2x`}
            media="(min-width: 1400px)"
          />
          <source
            srcSet={`${BackgroundMedium} 1x, ${BackgroundMedium2x} 2x`}
            media="(min-width: 600px)"
          />
          <PreviewSectionImage
            src={BackgroundSmall}
            srcSet={`${BackgroundSmall} 1x, ${BackgroundSmall2x} 2x`}
            alt="Gamestack – organize all your games in one place"
          />
        </PreviewSectionPicture>
        <PreviewSectionAngle
          top
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0 0, 100 0, 100 100"/>
        </PreviewSectionAngle>
        <PreviewSectionAngle
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0 0, 0 100, 100 100"/>
        </PreviewSectionAngle>
      </PreviewSectionBackground>
    </PreviewSection>
    <HomeMobileFooter />
  </HomeContainer>
)

const HomeContainer = styled(Container)`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  color: white;
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
  width: 60vw;
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
  width: 100%;
  overflow: hidden;
`;

const PreviewSectionImage = styled.img`
  object-fit: cover;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0.5;
`;

const PreviewSectionAngle = styled.svg`
  min-height: 100vh;
  height: 100%;
  width: 30vh;
  position: absolute;
  left: -1px;
  z-index: 20;
  fill: ${props => props.theme.colorBackground(1)};

  @media (max-width: ${Media.tablet}) {
    height: 20vw;
    min-height: 0;
    width: 100vw;
    position: absolute;
    left: 0;
    bottom: -1px;
  }

  ${props => props.top &&`
    top: -1px;
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

const PhoneContainer = styled.div`
  display: flex;
  height: auto;
  overflow: hidden;
  padding: 0;
  position: relative;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  overflow: visible;
  padding-top: 40px;
  padding-bottom: 80px;

  @media (max-width: ${Media.tablet}) {
    padding: 0;
    justify-content: center;
  }
`;

const PhoneContainerPhone = styled.div`
  display: flex;
  position: relative;
  background: linear-gradient(#2E3747, #21252B);
  justify-content: center;
  border-radius: 54px;
  max-width: 360px;
  width: 100%;
  height: auto;
  box-shadow:
    0 40px 50px ${props => props.theme.colorBlack(0.25)},
    0 10px 20px rgba(0, 21, 64, 0.5),
    0 2px 6px rgba(0, 21, 64, 0.15),
    inset 0 -5px 38px ${props => props.theme.colorBackground(1)},
    inset 0 4px 7px 1px ${props => props.theme.colorBlack(0.23)};

  &:before {
    content: '';
    height: 6px;
    width: 60px;
    background: ${props => props.theme.colorBlack(0.3)};
    border-radius: 3px;
    position: absolute;
    top: 28px;
    left: 50%;
    margin-left: -30px;
  }

  @media (max-width: ${Media.desktop}) {
    max-width: 280px;
    border-radius: 46px;
  }
`;

const PhoneContainerScreen = styled.div`
  flex: 1 0 auto;
  padding: 60px 20px;
  border-radius: 4px;
  max-width: 100%;
  display: flex;
  align-items: flex-start;
`;

const PhoneContainerVideo = styled.video`
  flex: 1 0 auto;
  width: 100%;
  height: auto;
  box-shadow: 0 0 0 2px #21252B;
  border-radius: 4px;
  object-fit: cover;
`;

export default Home;
