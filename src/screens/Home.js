import React, { useState, useEffect, useRef, useContext } from 'react';
import styled, { css, keyframes, withTheme } from 'styled-components/macro';
import { useScrollToTop } from '../utils/Hooks';
import { AppContext } from '../App';
import Footer from '../components/Footer';
import Container from '../components/Container';
import MainHero from '../components/MainHero';
import PhoneContainer from '../components/PhoneContainer';
import Icon from '../utils/Icon';
import HeroMp4 from '../images/app-preview.mp4';
import HeroWebm from '../images/app-preview.webm';
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

const prerender = navigator.userAgent === 'ReactSnap';
const imageAlt = 'Gamestack – an app to organize all your games in one place';

function Home({ theme }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef();
  const { status } = useContext(AppContext);
  useScrollToTop(status);

  useEffect(() => {
    if (imageRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  const handleImageLoad = () => {
    if (!prerender) setImageLoaded(true);
  };

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
        <HomePhoneContainer
          mp4={HeroMp4}
          webm={HeroWebm}
          frame={HeroVideoFrame}
        />
        <PreviewSectionDetail>
          <PreviewSectionDetailRow>
            <PreviewSectionDetailIcon icon="steam" />
            <PreviewSectionDetailIcon icon="blizzard" />
          </PreviewSectionDetailRow>
          <PreviewSectionDetailText>Currently supported</PreviewSectionDetailText>
        </PreviewSectionDetail>
        <PreviewSectionBackground>
          <PreviewSectionPicture>
            <source
              srcSet={`${BackgroundLargeBlur}`}
              media={`(min-width: ${theme.desktop})`}
            />
            <source
              srcSet={`${BackgroundMediumBlur}`}
              media={`(min-width: ${theme.mobile})`}
            />
            <PreviewSectionImage
              src={BackgroundSmallBlur}
              show={!imageLoaded}
              srcSet={`${BackgroundSmallBlur}`}
              alt={imageAlt}
            />
          </PreviewSectionPicture>
          <PreviewSectionPicture>
            <source
              srcSet={`${BackgroundLarge} 1x, ${BackgroundLarge2x} 2x`}
              media={`(min-width: ${theme.desktop})`}
            />
            <source
              srcSet={`${BackgroundMedium} 1x, ${BackgroundMedium2x} 2x`}
              media={`(min-width: ${theme.mobile})`}
            />
            <PreviewSectionImage
              ref={imageRef}
              src={BackgroundSmall}
              show={imageLoaded && !prerender}
              onLoad={handleImageLoad}
              srcSet={`${BackgroundSmall} 1x, ${BackgroundSmall2x} 2x`}
              alt={imageAlt}
            />
          </PreviewSectionPicture>
          <PreviewSectionAngle top viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0 0, 100 0, 100 100" />
          </PreviewSectionAngle>
          <PreviewSectionMaskWrapper>
            <PreviewSectionMask />
            <PreviewSectionAngle viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0 0, 0 100, 100 100" />
            </PreviewSectionAngle>
          </PreviewSectionMaskWrapper>
        </PreviewSectionBackground>
      </PreviewSection>
      <HomeMobileFooter />
    </HomeContainer>
  );
}

const HomeContainer = styled(Container)`
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
  animation-name: ${!prerender && css`${AnimFade}`};
  animation-timing-function: ease;
  animation-duration: 0.9s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;

  @media (max-width: ${props => props.theme.tablet}) {
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
  animation-name: ${!prerender && css`${AnimSlide}`};
  animation-timing-function: ${props => props.theme.curveFastoutSlowin};
  animation-duration: 1s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;

  @media (max-width: ${props => props.theme.tablet}) {
    animation: none;
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const HomeMobileFooter = styled(Footer)`
  display: none;

  @media (max-width: ${props => props.theme.tablet}) {
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

  @media (max-width: ${props => props.theme.tablet}) {
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
  background-color: ${props => props.theme.colorBlue(1)};
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
    background: ${props => props.theme.colorBlue(0.5)};
    z-index: 1;
  }

  @media (max-width: ${props => props.theme.tablet}) {
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
        ${props.theme.colorBlue(1)},
        ${props.theme.colorBlue(0)}
      );`
  }

    @media (max-width: ${props => props.theme.tablet}) {
      display: none;
    }
  }

  @media (max-width: ${props => props.theme.tablet}) {
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
  opacity: ${props => props.show ? 0.5 : 0};
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
  animation-name: ${!prerender && css`${AnimBackgroundMask}`};
  animation-duration: 1.4s;
  animation-delay: 0.2s;
  animation-timing-function: ${props => props.theme.curveFastoutSlowin};
  animation-fill-mode: forwards;

  @media (max-width: ${props => props.theme.tablet}) {
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

  @media (max-width: ${props => props.theme.tablet}) {
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

  @media (max-width: ${props => props.theme.tablet}) {
    height: 20vw;
    min-height: 0;
    width: 100vw;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  ${props => props.top && css`
    top: 0;
    bottom: auto;
    display: none;

    @media (max-width: ${props.theme.tablet}) {
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
  opacity: ${prerender ? 0 : 1};

  @media (max-width: ${props => props.theme.tablet}) {
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

  @media (max-width: ${props => props.theme.tablet}) {
    margin-right: 0;

    &:first-child {
      margin-right: 20px;
    }
  }
`;

const PreviewSectionDetailText = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colorWhite(0.9)};
  font-weight: 500;
  background: ${props => props.theme.colorBlack(0.16)};
  padding: 6px 10px 8px;
  line-height: 1;
  border-radius: 6px;

  @media (max-width: ${props => props.theme.tablet}) {
    margin-bottom: 20px;
  }
`;

export default withTheme(Home);
