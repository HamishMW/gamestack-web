import React, { useState, useContext } from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { LinkButton } from '../components/Button';
import FourOhFourMp4 from '../images/four-oh-four.mp4';
import FourOhFourWebm from '../images/four-oh-four.webm';
import FourOhFourBlur from '../images/four-oh-four-blur.jpg';
import { useScrollToTop } from '../utils/Hooks';
import { AppContext } from '../App';

const prerender = navigator.userAgent === 'ReactSnap';

function FourOhFour() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { status } = useContext(AppContext);
  useScrollToTop(status);

  return (
    <React.Fragment>
      <Helmet>
        <title>404 Not Found</title>
        <meta name="description" content="This page doesn't exist" />
      </Helmet>
      <FourOhFourWrapper>
        <FourOhFourContent>
          <FourOhFourBackground>404</FourOhFourBackground>
          <FourOhFourTitle>Sneaky Beaky</FourOhFourTitle>
          <FourOhFourDescription>This page couldn't be found. It probably doesn't exist, or it may have moved</FourOhFourDescription>
          <LinkButton secondary to="/" text="Back to homepage" />
        </FourOhFourContent>

        <FourOhFourVideoWrapper aria-hidden>
          <FourOhFourImage src={FourOhFourBlur} loaded={videoLoaded} image alt="404 not found" />
          {!prerender &&
            <FourOhFourVideo
              muted
              autoPlay
              loop
              playsInline
              loaded={videoLoaded}
              onLoadStart={() => setVideoLoaded(true)}
            >
              <source src={FourOhFourWebm} type="video/webm" />
              <source src={FourOhFourMp4} type="video/mp4" />
              <img src={FourOhFourBlur} alt="404 not found" />
            </FourOhFourVideo>
          }
        </FourOhFourVideoWrapper>
        <FourOhFourFooter />
      </FourOhFourWrapper>
    </React.Fragment>
  );
}

const FourOhFourWrapper = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const FourOhFourContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  text-align: center;
  padding: 0 20px;
  overflow: hidden;
`;

const FourOhFourTitle = styled.h1`
  font-size: 64px;
  line-height: 1;
  color: white;
  margin: 0;
  margin-bottom: 16px;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 36px;
  }
`;

const FourOhFourDescription = styled.p`
  font-size: 22px;
  color: white;
  margin: 0;
  max-width: 500px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 30px;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 18px;
  }
`;

const FourOhFourBackground = styled.div`
  font-size: 380px;
  font-weight: 800;
  position: absolute;
  z-index: -1;
  color: ${props => props.theme.colorBlack(0.15)};

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 220px;
  }
`;

const FourOhFourVideoWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  max-height: 100vh;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.colorBlue(0.8)};
    z-index: 1;
  }
`;

const FourOhFourVideo = styled.video`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  z-index: 0;
  transition: opacity 0.5s ease;
  opacity: 0;

  ${props => props.loaded && !props.image &&
    'opacity: 1;'
  }

  ${props => !props.loaded && props.image &&
    'opacity: 1;'
  }

  @media (max-width: ${props => props.theme.mobile}) {
    object-position: left;
  }
`;

const FourOhFourImage = FourOhFourVideo.withComponent('img');

const FourOhFourFooter = styled(Footer)`
  background: transparent;
`;

export default FourOhFour;
