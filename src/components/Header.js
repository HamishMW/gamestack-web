import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { AnchorButton } from '../components/Button';

const betaUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf-8LaHUz8ftPvpgPeZQiaQVLcyw2caXF_57DGAvFJhClDBKw/viewform?usp=sf_link';

const Header = ({ transparent, white, fixed = true, status }) => (
  <React.Fragment>
    <SkipToMain href="#MainContent">Skip to main content</SkipToMain>
    <HeaderContainer transparent={transparent} fixed={fixed} status={status}>
      <HeaderLogo to="/">
        <HeaderLogoIcon white={white} />
        <HeaderLogoText>Gamestack</HeaderLogoText>
      </HeaderLogo>
      <HeaderButton
        href={betaUrl}
        secondary={white}
        size="small"
        text="Beta Sign Up"
        target="_blank"
        rel="noopener noreferrer"
      />
    </HeaderContainer>
  </React.Fragment>
);

const HeaderContainer = styled.header`
  height: 68px;
  width: 100%;
  z-index: 512;
  position: ${props => props.fixed ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 16px;
  transition: opacity 0.4s ease;
  background: ${props => props.transparent
    ? 'transparent'
    : props.theme.colorBackgroundDark()
  };
  opacity: ${props => props.status === 'entered' ? 1 : 0};
`;

const SkipToMain = styled.a`
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  color: ${props => props.theme.colorBackground()};
  z-index: 2048;

  &:focus {
    background: ${props => props.theme.colorBlue()};
    border-radius: 6px;
    padding: 8px 16px;
    position: fixed;
    top: 16px;
    left: 16px;
    clip: auto;
    width: auto;
    height: auto;
    text-decoration: none;
    font-weight: 500;
    line-height: 1;
  }
`;

const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const HeaderLogoIcon = styled(Logo)`
  width: 54px;
  fill: ${props => props.white
    ? props.theme.colorWhite()
    : props.theme.colorBlue()
  };
  margin-right: 10px;
`;

const HeaderLogoText = styled.span`
  font-size: 18px;
  color: ${props => props.theme.colorText()};

  @media (max-width: ${props => props.theme.mobile}) {
    display: none;
  }
`;

const HeaderButton = styled(AnchorButton)`
  margin-left: auto;
`;

export default Header;
