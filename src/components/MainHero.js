import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Theme from '../utils/Theme';
import { Media } from '../utils/StyleUtils';

const MainHero = (props) => {
  const { appName, title, description } = props;
  const contactEmail = 'contact@gamestackapp.com';
  const mailToString = `mailto:${contactEmail}?subject=${appName}%20Beta%20Request`;

  return (
    <MainHeroContainer>
      <MainHeroDetails>
        <MainHeroLogo>
          <MainHeroLogoIcon color={Theme.colorPrimary(1)}/>
          <MainHeroLogoText>{appName}</MainHeroLogoText>
        </MainHeroLogo>
        <MainHeroTitle>{title}</MainHeroTitle>
        <MainHeroDescription>{description}</MainHeroDescription>
        <MainHeroActions>
          <MainHeroButton
            shadow
            icon="apple"
            text="Request beta invite"
            data-gtm="beta-request"
            onClick={() => window.location = mailToString}
          />
          <Button
            flat
            disabled
            icon="android"
            text="Android coming soon"
          />
        </MainHeroActions>
      </MainHeroDetails>
      <MainHeroFooter />
    </MainHeroContainer>
  );
};


const MainHeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 40;

  @media (max-width: ${Media.tablet}) {
    flex-direction: column;
  }
`;

const MainHeroDetails = styled.div`
  max-width: 560px;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${Media.desktop}) {
    max-width: 450px;
  }

  @media (max-width: ${Media.tablet}) {
    justify-content: center;
    text-align: center;
    max-width: none;
    padding: 80px 20px 40px;
    max-width: 500px;
  }

  @media (max-width: ${Media.mobile}) {
    padding-top: 60px;
  }
`;

const MainHeroLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${Media.tablet}) {
    justify-content: center;
  }
`;

const MainHeroLogoIcon = styled(Logo)`
  width: 62px;
  margin-right: 16px;

  @media (max-width: ${Media.mobile}) {
    width: 56px;
    margin-right: 10px;
  }
`;

const MainHeroLogoText = styled.h2`
  font-size: 24px;
  font-weight: 300;
  margin: 0;

  @media (max-width: ${Media.mobile}) {
    font-size: 20px;
  }
`;

const MainHeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 600;
  margin: 20px 0 0;

  @media (max-width: ${Media.desktop}) {
    font-size: 48px;
  }

  @media (max-width: ${Media.mobile}) {
    font-size: 32px;
  }
`;

const MainHeroDescription = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  line-height: 1.4;

  @media (max-width: ${Media.tablet}) {
    margin-left: auto;
    margin-right: auto;
    font-size: 16px;
  }
`;

const MainHeroActions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: ${Media.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${Media.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const MainHeroButton = styled(Button)`
  margin-right: 10px;
  margin-bottom: 20px;

  @media (max-width: ${Media.mobile}) {
    margin-right: 0;
  }
`;

const MainHeroFooter = styled(Footer)`
  position: absolute;
  bottom: 0;

  @media (max-width: ${Media.tablet}) {
    display: none;
  }
`;

export default MainHero;
