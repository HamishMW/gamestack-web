import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import { AnchorButton } from '../components/Button';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Theme from '../utils/Theme';

export default class MainHero extends Component {
  state = {
    inputValue: '',
  }

  onChange = event => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const { appName, title, description, className } = this.props;
    const { inputValue } = this.state;
    const actionUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf-8LaHUz8ftPvpgPeZQiaQVLcyw2caXF_57DGAvFJhClDBKw/viewform?usp=sf_link';

    return (
      <MainHeroContainer className={className}>
        <MainHeroDetails>
          <MainHeroLogo>
            <MainHeroLogoIcon color={Theme.colorBlue(1)} />
            <MainHeroLogoText>{appName}</MainHeroLogoText>
          </MainHeroLogo>
          <MainHeroTitle>{title}</MainHeroTitle>
          <MainHeroDescription>{description}</MainHeroDescription>
          <MainHeroActions>
            {false &&
              <Input
                value={inputValue}
                label="Enter your email"
                onChange={this.onChange}
              />
            }
            <MainHeroButton
              shadow
              icon="apple"
              text="Request beta invite"
              data-gtm="beta-request"
              target="_blank"
              rel="noopener noreferrer"
              href={actionUrl}
            />
          </MainHeroActions>
        </MainHeroDetails>
        <MainHeroFooter />
      </MainHeroContainer>
    );
  }
}

const MainHeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 40;
  color: ${props => props.theme.colorText(1)};

  @media (max-width: ${props => props.theme.tablet}) {
    flex-direction: column;
  }
`;

const MainHeroDetails = styled.div`
  max-width: 560px;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${props => props.theme.desktop}) {
    max-width: 450px;
  }

  @media (max-width: ${props => props.theme.tablet}) {
    justify-content: center;
    text-align: center;
    max-width: none;
    padding: 80px 20px 40px;
    max-width: 500px;
  }

  @media (max-width: ${props => props.theme.mobile}) {
    padding-top: 60px;
  }
`;

const MainHeroLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${props => props.theme.tablet}) {
    justify-content: center;
  }
`;

const MainHeroLogoIcon = styled(Logo)`
  width: 62px;
  margin-right: 16px;

  @media (max-width: ${props => props.theme.mobile}) {
    width: 56px;
    margin-right: 10px;
  }
`;

const MainHeroLogoText = styled.h2`
  font-size: 24px;
  font-weight: 300;
  margin: 0;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 20px;
  }
`;

const MainHeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 600;
  margin: 20px 0 0;
  line-height: 1;
  margin-bottom: 5px;

  @media (max-width: ${props => props.theme.desktop}) {
    font-size: 48px;
  }

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 32px;
  }
`;

const MainHeroDescription = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
  line-height: 1.5;
  color: ${props => props.theme.colorWhite(0.8)};

  @media (min-width: ${props => props.theme.desktop}) {
    font-size: 22px;
  }

  @media (max-width: ${props => props.theme.tablet}) {
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
  }
`;

const MainHeroActions = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;
  width: 100%;
  max-width: 480px;

  @media (max-width: ${props => props.theme.tablet}) {
    grid-template-columns: auto;
    max-width: 300px;
    align-self: center;
  }

  @media (max-width: ${props => props.theme.mobile}) {
    max-width: 100%;
    width: 100%;
  }
`;

const MainHeroButton = styled(AnchorButton)`
  max-width: fit-content;

  @media (max-width: ${props => props.theme.tablet}) {
    justify-self: center;
  }
`;

const MainHeroFooter = styled(Footer)`
  position: absolute;
  bottom: 0;

  @media (max-width: ${props => props.theme.tablet}) {
    display: none;
  }
`;
