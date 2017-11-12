import React from 'react';
import './Support.css';
import Button from '../components/Button';
import Footer from '../components/Footer';
import SupportImage2x from '../images/support@2x.png';
import SupportImage from '../images/support.png';
import { Helmet } from 'react-helmet';

const Support = () => (
  <main className="Support">
    <Helmet>
      <title>Support</title>
      <meta name="description" content='Contact Gamestack support if you‘re having problems'/>
    </Helmet>

    <div className="Container">
      <section className="Support__text-section">
        <picture>
          <img srcSet={`${SupportImage} 1x, ${SupportImage2x} 2x`} src={SupportImage} alt="We're here to help" />
        </picture>
        <h2 className="Support__text-section-title">Gamestack Support</h2>
        <p className="Support__text-section-description">Reach out to us if you have feedback or want to report a technical problem.</p>
        <Button text="Contact Support" style={{marginTop: 20}} shadow onClick={() => window.location='mailto:contact@gamestackapp.com?subject=Gamestack Support Request'} />
      </section>
    </div>
    <Footer />
  </main>
)

export default Support;
