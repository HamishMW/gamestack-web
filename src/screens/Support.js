import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Footer from '../components/Footer';
import SupportImage2x from '../images/support@2x.png';
import SupportImage from '../images/support.png';
import Container from '../components/Container';
import { Helmet } from 'react-helmet';
import { Media } from '../utils/StyleUtils';
import ScrollToTop from '../utils/ScrollToTop';

const Fragment = React.Fragment;

const Support = () => (
  <Fragment>
    <ScrollToTop />
    <Helmet>
      <title>Support</title>
      <meta name="description" content="Contact Gamestack support if you‘re having problems"/>
    </Helmet>

    <SupportWrapper>
      <SupportTextSection>
        <picture>
          <img
            srcSet={`${SupportImage} 1x, ${SupportImage2x} 2x`}
            src={SupportImage}
            alt="We're here to help"
          />
        </picture>
        <SupportTitle>Gamestack Support</SupportTitle>
        <SupportDescription>
          {`Reach out to us if you have feedback or
            want to report a technical problem.`}
        </SupportDescription>
        <SupportButton
          shadow
          text="Contact Support"
          data-gtm="support-contact"
          onClick={() => window.location='mailto:contact@gamestackapp.com?subject=Gamestack Support Request'}
        />
      </SupportTextSection>
    </SupportWrapper>
    <Footer />
  </Fragment>
);

const SupportWrapper = Container.extend`
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  color: ${props => props.theme.colorText(1)};
`;

const SupportTextSection = styled.section`
  max-width: 1040px;
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  text-align: center;
  flex-direction: column;
  position: relative;

  @media (max-width: ${Media.tablet}) {
    max-width: 100vw;
  }
`;

const SupportTitle = styled.h1`
  font-size: 32px;
  font-weight: 400;
  margin: 0 0 15px;
`;

const SupportDescription = styled.p`
  font-size: 16px;
  max-width: 435px;
  margin: 0;
  line-height: 1.4;
  text-align: center;
`;

const SupportButton = styled(Button)`
  margin-top: 30px;
`;

export default Support;
