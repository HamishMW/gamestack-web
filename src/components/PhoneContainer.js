import React from 'react';
import styled from 'styled-components';
import { Media } from '../utils/StyleUtils';

const PhoneContainer = (props) => (
  <PhoneContainerWrapper>
    <PhoneContainerPhone>
      <PhoneContainerScreen>
        <PhoneContainerVideo
          poster={props.frame}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={props.video} type="video/mp4" />
        </PhoneContainerVideo>
      </PhoneContainerScreen>
    </PhoneContainerPhone>
  </PhoneContainerWrapper>
);

const PhoneContainerWrapper = styled.div`
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
  box-shadow: 0 0 0 2px #21252B;
  border-radius: 4px;
  object-fit: cover;
  width: 240px;
  height: 426px;

  @media (min-width: ${Media.desktop}) {
    width: 320px;
    height: 568px;
  }

  @media (max-width: ${Media.mobile}) {
    width: 100%;
    height: auto;
  }
`;

export default PhoneContainer;
