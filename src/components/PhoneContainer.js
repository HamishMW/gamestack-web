import React, { useState } from 'react';
import styled from 'styled-components/macro';

const PhoneContainer = ({ frame, mp4, webm, label, placeholder, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);

  return (
    <PhoneContainerWrapper {...rest}>
      <PhoneContainerPhone>
        <PhoneContainerScreen>
          <PhoneContainerVideo
            autoPlay
            muted
            loop
            playsInline
            aria-label={label}
            onPlay={() => setLoaded(true)}
          >
            <source src={mp4} type="video/mp4" />
            <source src={webm} type="video/webm" />
          </PhoneContainerVideo>
          <PhoneContainerPlaceholder
            instant
            src={frame}
            loaded={loaded}
            onLoad={() => setPosterLoaded(true)}
          />
          <PhoneContainerPlaceholder
            src={placeholder}
            loaded={posterLoaded || loaded}
          />
        </PhoneContainerScreen>
      </PhoneContainerPhone>
    </PhoneContainerWrapper>
  );
};

const PhoneContainerWrapper = styled.div`
  display: flex;
  height: auto;
  padding: 0;
  position: relative;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  z-index: 10;
  overflow: visible;
  padding-top: 40px;
  padding-bottom: 80px;

  @media (max-width: ${props => props.theme.tablet}) {
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
  max-width: 368px;
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
    top: 36px;
    left: 50%;
    margin-left: -30px;

    @media (max-width: ${props => props.theme.desktop}) {
      top: 28px;
    }
  }

  @media (max-width: ${props => props.theme.desktop}) {
    max-width: 280px;
    border-radius: 46px;
  }
`;

const PhoneContainerScreen = styled.div`
  flex: 1 0 auto;
  padding: 76px 24px;
  border-radius: 4px;
  max-width: 100%;
  display: grid;
  align-items: flex-start;

  @media (max-width: ${props => props.theme.desktop}) {
    padding: 60px 20px;
  }
`;

const PhoneContainerVideo = styled.video`
  grid-column: 1;
  grid-row: 1;
  box-shadow: 0 0 0 2px #21252B;
  border-radius: 4px;
  object-fit: cover;
  width: 240px;
  height: 426px;

  @media (min-width: ${props => props.theme.desktop}) {
    width: 320px;
    height: 568px;
  }

  @media (max-width: ${props => props.theme.mobile}) {
    width: 100%;
    height: auto;
  }
`;

const PhoneContainerPlaceholder = styled.img.attrs({
  alt: '',
  role: 'presentation',
})`
  box-shadow: 0 0 0 2px #21252B;
  opacity: ${props => props.loaded ? 0 : 1};
  transition: opacity ${props => props.instant ? 0 : 0.4}s ease;
  border-radius: 4px;
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export default PhoneContainer;
