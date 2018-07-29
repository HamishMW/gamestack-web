import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { LinkButton } from '../components/Button';
import FourOhFourMp4 from '../images/four-oh-four.mp4';
import FourOhFourWebm from '../images/four-oh-four.webm';
import FourOhFourBlur from '../images/four-oh-four-blur.jpg';

const Fragment = React.Fragment;

class FourOhFour extends Component {
  state = {
    videoLoaded: false,
  };

  setLoaded = () => {
    this.setState({ videoLoaded: true });
  }

  render() {
    const { videoLoaded } = this.state;
    const isReactSnap = window.location.port === '45678';

    return (
      <Fragment>
        <Helmet>
          <title>404 Not Found</title>
          <meta name="description" content="This page doesn't exist" />
        </Helmet>
        <FourOhFourWrapper>
          <FourOhFourContent>
            <FourOhFourBackground>404</FourOhFourBackground>
            <FourOhFourTitle>Sneaky Beaky</FourOhFourTitle>
            <FourOhFourDescription>This page couldn't be found. It probably doesn't exist, or it may have moved</FourOhFourDescription>
            <LinkButton secondary to="/" text="Back to home" />
          </FourOhFourContent>

          <FourOhFourVideoWrapper>
            <FourOhFourImage src={FourOhFourBlur} loaded={videoLoaded} image alt="404 not found" />
            {!isReactSnap &&
              <FourOhFourVideo
                autoPlay
                muted
                loop
                playsInline
                loaded={videoLoaded}
                onLoadStart={this.setLoaded}
              >
                <source src={FourOhFourWebm} type="video/webm" />
                <source src={FourOhFourMp4} type="video/mp4" />
                <img src={FourOhFourBlur} alt="404 not found" />
              </FourOhFourVideo>
            }
          </FourOhFourVideoWrapper>
          <FourOhFourFooter />
        </FourOhFourWrapper>
      </Fragment>
    );
  }
}

const FourOhFourWrapper = Container.extend`
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
  top: -30px;
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
    font-size: 48px;
  }
`;

const FourOhFourDescription = styled.p`
  font-size: 22px;
  color: white;
  margin: 0;
  max-width: 500px;
  text-align: center;
  line-height: 1.6;
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
  color: ${props => props.theme.colorWhite(0.15)};

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

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.colorPrimary(0.8)};
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

  ${props => props.image && 'filter: blur(10px);'}

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
