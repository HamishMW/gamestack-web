import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { AnchorButton } from '../components/Button';

const betaUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf-8LaHUz8ftPvpgPeZQiaQVLcyw2caXF_57DGAvFJhClDBKw/viewform?usp=sf_link';

const Header = ({ transparent, white, fixed = true }) => (
  <HeaderContainer transparent={transparent} fixed={fixed}>
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
  background: ${props => props.transparent
    ? 'transparent'
    : props.theme.colorBackground()
  };

  ${props => !props.transparent && `
    box-shadow:
      0 2px 4px ${props.theme.colorBlack(0.2)},
      0 8px 16px ${props.theme.colorBlack(0.1)};
  `}
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